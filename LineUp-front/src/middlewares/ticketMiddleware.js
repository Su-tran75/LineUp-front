/* eslint-disable camelcase */
import axios from 'axios';
import { createBrowserHistory } from 'history';

import {
  SEND_TICKET_TO_DB,
  ARCHIVE_TICKET_USER,
  populateTicketList,
  getIntervalValue,
} from 'src/actions/ticket';

import {
  LOAD_TICKET_INFOS,
  UPDATE_USER_TICKET,
  getTicketInfos,
  getUserInfo,
} from 'src/actions/profile';

import { isModalOpen } from 'src/actions/restaurant';

const history = createBrowserHistory({ forceRefresh: true });

const apiBaseUrl = 'http://35.172.191.94/lineup/public/api';

const ticketMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_TICKET_TO_DB: {
      // Status 1 = ticket in progress
      const status = 1;
      // We get the necessary values in the state
      const { comment, guest } = store.getState().ticket;
      const { id, lastname } = store.getState().profile.user;
      // Change var name to match with DB
      const name = lastname;
      const user = id;

      // Retrieve the id in the URL (raw method) by splitting with /
      const parsedUrl = new URL(window.location.href).pathname;
      const split = parsedUrl.split('/');
      let restaurant = split[1];
      restaurant = parseInt(restaurant, 10);

      // Get access token
      const token = localStorage.getItem('token');

      // Now we have to compute ticket informations before to post it in DB
      // So we make a request on wanted restaurant to get them infos
      axios.get(`${apiBaseUrl}/restaurants/${restaurant}`)
        .then((r) => {
          // Put restaurant's time interval in the state
          store.dispatch(getIntervalValue(r.data.time_interval));
          // We filtered response to get only tickets which have status = 1 (in Progress)
          const filteredArr = r.data.ticket.filter((item) => item.status === 1);
          // His position is equal to the length of array cause it's the last one arrived on array
          const position = filteredArr.length;

          // Then we compute its estimated time
          const intervalValue = r.data.time_interval;
          const estimatedTime = ((position * intervalValue) + intervalValue);

          // Now we can add new ticket in DB
          axios.post(`${apiBaseUrl}/tickets`, {
            name,
            comment,
            guest,
            status,
            restaurant,
            user,
            estimatedTime,
          }, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
            .then((response) => {
              // Retrieve the new ticket id
              const currentTicket = response.data.id;

              // Patch the user with his new ticket id
              axios.patch(`${apiBaseUrl}/users/${user}`, {
                currentTicket,
              }, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }).then(() => {
                // We then retrieve all of our updated information
                axios.get(`${apiBaseUrl}/users/${user}`, { headers: { Authorization: `Bearer ${token}` } })
                  .then((rs) => {
                    // Refreshing state with new user infos (with his new ticket)
                    store.dispatch(getUserInfo(rs.data));

                    // Refreshing local storage with new user infos (with his new ticket)
                    localStorage.removeItem('user');
                    localStorage.setItem('user', JSON.stringify(rs.data));

                    // We redirect user to Ticket Page
                    history.replace('/ticket');
                  });
              }).then(() => {
                // Closing ticket modal
                store.dispatch(isModalOpen());
              });
            })
            .catch((error) => {
              console.log(error);
            });
        });

      next(action);
      break;
    }

    case ARCHIVE_TICKET_USER: {
      // Get necessary values in the state
      const { current_ticket } = store.getState().profile.user;
      // Status 0 = Not in progress
      const status = 0;
      // Get access token
      const token = localStorage.getItem('token');

      // Patch user to set ticket status to 0 to archive it
      axios.patch(`${apiBaseUrl}/tickets/${current_ticket}`, {
        status,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(() => {

        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }

    case UPDATE_USER_TICKET: {
      // Put a null value to user's current ticket to disable it
      const currentTicket = null;
      // Get user id to put it in the endpoint
      const { id } = store.getState().profile.user;
      // Get access token
      const token = localStorage.getItem('token');

      axios.patch(`${apiBaseUrl}/users/${id}`, {
        currentTicket,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(() => {
          // Then we make a request on this user to get them new info
          axios.get(`${apiBaseUrl}/users/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
          })
            .then((r) => {
              // Then put them info in the state
              store.dispatch(getUserInfo(r.data));
              // And in the local storage too
              localStorage.removeItem('user');
              localStorage.setItem('user', JSON.stringify(r.data));
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }

    case LOAD_TICKET_INFOS: {
      // Retrieve current ticket id in the state
      const { current_ticket } = store.getState().profile.user;
      // Get access token
      const token = localStorage.getItem('token');

      axios.get(`${apiBaseUrl}/tickets/${current_ticket}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => {
          // Put ticket info in the state
          store.dispatch(getTicketInfos(response.data));
        }).then(() => {
          // Retrieve restaurant id in the state
          const { id } = store.getState().profile.ticket.restaurant;

          axios.get(`${apiBaseUrl}/tickets/restaurants/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
          })
            .then((res) => {
              // We filtered response to get only tickets which have status = 1 (in Progress)
              const filteredArr = res.data.filter((item) => item.status === 1);
              // And put this array in the state
              store.dispatch(populateTicketList(filteredArr));
            });
        });
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default ticketMiddleware;
