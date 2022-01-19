import axios from 'axios';
import emailjs from 'emailjs-com';

import {
  SEND_STATUS_TO_DB,
  setStatus,
  SEND_INTERVAL_TO_DB,
  SEND_TICKET_TO_DB_FROM_BO,
  SEND_EMAIL_TO_ADMIN,
  LOAD_TICKETS,
  setTickets,
  setTicketCounter,
  ARCHIVE_TICKET_FROM_BO,
  UPDATE_USER_TICKET_FROM_BO,
  setNextTicketHour,
  toggleIsLoadingTicket,
} from 'src/actions/backOffResto';

const apiBaseUrl = 'http://35.172.191.94/lineup/public/api';

const backOffRestoMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    // Load all current tickets in TicketLine
    case LOAD_TICKETS: {
      // We get the necessary values in the state
      const { restaurantId } = store.getState().profile.user;
      // Get access token
      const token = localStorage.getItem('token');

      // We send the GET request by attaching the restaurant id
      axios.get(`${apiBaseUrl}/tickets/restaurants/${restaurantId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => {
          // We filtered response to get only tickets which have status = 1 (in Progress)
          const filteredArr = response.data.filter((item) => item.status === 1);
          // We put this filtered array in the state to refresh the new ticket list
          store.dispatch(setTickets(filteredArr));
          // Refreshing the counter with the length of our filtered array
          store.dispatch(setTicketCounter(filteredArr.length));
          // Refreshing the next ticket hour in TimeInterval
          store.dispatch(setNextTicketHour());
          // We unset the loader
          store.dispatch(toggleIsLoadingTicket(false));
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }

    case SEND_STATUS_TO_DB: {
      // We get the necessary values in the state
      const { restaurantId } = store.getState().profile.user;
      let { status } = store.getState().backOffResto;

      // We transform boolean to number to correspond with db
      // cause its not bool values in DB
      if (status) {
        status = 0;
      }
      else {
        status = 1;
      }

      // Get access token
      const token = localStorage.getItem('token');

      // Send new status to DB
      axios.patch(`${apiBaseUrl}/restaurants/${restaurantId}`, {
        status,
      }, { headers: { Authorization: `Bearer ${token}` } })
        .then(() => {
          // We change status in the state to refresh the toggle button
          store.dispatch(setStatus());
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }

    // Update concerned user in DB to refresh his ticket
    case UPDATE_USER_TICKET_FROM_BO: {
      // We get the clicked ticket id in the state
      const { id } = store.getState().backOffResto.currentTicket.user;
      // We set a null value to current ticket to archive it in DB
      const currentTicket = null;
      // Get access token
      const token = localStorage.getItem('token');

      // Send our patch request with a null value for current ticket
      axios.patch(`${apiBaseUrl}/users/${id}`, {
        currentTicket,
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

    case ARCHIVE_TICKET_FROM_BO: {
      // Set a status value to 0 to archive it in DB
      const status = 0;

      // We get the clicked ticket id in the state
      const { id } = store.getState().backOffResto.currentTicket;

      // Get access token
      const token = localStorage.getItem('token');

      // Set the loader
      store.dispatch(toggleIsLoadingTicket(true));

      // 1. Change ticket status to 0 to disable it
      axios.patch(`${apiBaseUrl}/tickets/${id}`, {
        status,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(() => {
          // Get restaurant id which is store in the state
          const { restaurantId } = store.getState().profile.user;

          // 2. Get a global tickets array of this restaurant
          axios.get(`${apiBaseUrl}/tickets/restaurants/${restaurantId}`, {
            headers: { Authorization: `Bearer ${token}` },
          })
            .then((res) => {
              // Then we filtered on it to get only items with status 1
              const filteredArr = res.data.filter((item) => item.status === 1);

              // We loop on this array to patch every ticket on it
              filteredArr.forEach((item) => {
                // Get ticket id to put it in the patch endpoint
                const ticketId = item.id;
                // Get interval value from the state for the estimated time calculation
                const { intervalValue } = store.getState().backOffResto;
                // Get ticket position in array with its index
                const position = filteredArr.indexOf(item) + 1;
                // Calculate estimated time
                const estimatedTime = ((position * intervalValue));

                // Then send our patch request on each ticket in our array
                axios.patch(`${apiBaseUrl}/tickets/${ticketId}`, {
                  estimatedTime,
                }, {
                  headers: { Authorization: `Bearer ${token}` },
                }).then(() => {

                }).catch((err) => {
                  console.log(err);
                });
              });
              // We put this filtered array in the state to refresh the new ticket list
              store.dispatch(setTickets(filteredArr));
              // Refreshing the counter with the length of our filtered array
              store.dispatch(setTicketCounter(filteredArr.length));
              // Refreshing the next ticket hour in TimeInterval
              store.dispatch(setNextTicketHour());
              // Unset the loader
              store.dispatch(toggleIsLoadingTicket(false));
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

    // Action triggered during RestoForm submission
    case SEND_EMAIL_TO_ADMIN: {
      // Get the values entered by the user in the state
      const {
        firstname,
        lastname,
        email,
        phoneNumber,
        city,
        postalCode,
        adress,
        restaurantName,
        cuisineTypeId,
        siret,
        picture,
        tradeName,

      } = store.getState().backOffResto;

      // Send the email with emailjs enclosing right service ids &
      // values to put in mail's template
      // @see https://www.emailjs.com/docs/rest-api/send/
      emailjs.send(
        'service_hq54t19', 'template_m2pfd0n',
        {
          firstname,
          lastname,
          email,
          phoneNumber,
          city,
          postalCode,
          adress,
          restaurantName,
          cuisineTypeId,
          siret,
          picture,
          tradeName,
        }, 'user_HM2pyLlmFfa12ayK6aIXJ',
      ).then((res) => {
        console.log('Email successfully sent!', res);
      })
        // Handle errors here however you like, or use a React error boundary
        .catch((err) => console.log('Oh well, you failed. Here some thought', err));

      next(action);
      break;
    }
    case SEND_INTERVAL_TO_DB: {
      // We get the necessary values in the state
      const { intervalValue } = store.getState().backOffResto;
      const { restaurantId } = store.getState().profile.user;

      // Set the loader
      store.dispatch(toggleIsLoadingTicket(true));

      // We transform our var to correspond with db
      const timeInterval = parseInt(intervalValue, 10);

      // Get access token
      const token = localStorage.getItem('token');

      axios.patch(`${apiBaseUrl}/restaurants/${restaurantId}`, {
        timeInterval,
      }, { headers: { Authorization: `Bearer ${token}` } })
        .then(() => {
          store.dispatch(setNextTicketHour());

          // Requete pour effectuer le changement coté client sur chacun des tickets
          axios.get(`${apiBaseUrl}/tickets/restaurants/${restaurantId}`, {
            headers: { Authorization: `Bearer ${token}` },
          })
            .then((res) => {
              // Then we filtered on it to get only items with status 1 & update ticket counter
              const filteredArr = res.data.filter((item) => item.status === 1);

              // We loop on this array to patch every ticket on it
              filteredArr.forEach((item) => {
                // Get ticket id to put it in the patch endpoint
                const ticketId = item.id;
                // Get ticket position in array with its index
                const position = filteredArr.indexOf(item) + 1;
                // Calculate estimated time
                const estimatedTime = (position * intervalValue);

                // Patch ticket with the right estimated time
                axios.patch(`${apiBaseUrl}/tickets/${ticketId}`, {
                  estimatedTime,
                }, {
                  headers: { Authorization: `Bearer ${token}` },
                }).then(() => {
                  // Get new ticket array to refresh TicketLine
                  axios.get(`${apiBaseUrl}/tickets/restaurants/${restaurantId}`, {
                    headers: { Authorization: `Bearer ${token}` },
                  })
                    .then((rs) => {
                      // We filtered array to get only items with status 1
                      const filteredArray = rs.data.filter((i) => i.status === 1);
                      // We put this filtered array in the state to refresh the new ticket list
                      store.dispatch(setTickets(filteredArray));
                      // Refreshing the counter with the length of our filtered array
                      store.dispatch(setTicketCounter(filteredArray.length));
                      // Refreshing the next ticket hour in TimeInterval
                      store.dispatch(setNextTicketHour());
                      // Unset the loader
                      store.dispatch(toggleIsLoadingTicket(false));
                    });
                }).catch((err) => {
                  console.log(err);
                });
              });
            });
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }
    case SEND_TICKET_TO_DB_FROM_BO: {
      // Value 1 correspond to a ticket in progress
      const status = 1;
      // We get the necessary values in the state
      const {
        nameOnTicket,
        commentOnTicket,
        nbOfGuest,
        nextTicketHour,
      } = store.getState().backOffResto;
      const { restaurantId } = store.getState().profile.user;
      // Transform our var names to correspond with DB
      const name = nameOnTicket;
      const comment = commentOnTicket;
      const estimatedTime = nextTicketHour;
      const restaurant = restaurantId;
      const guest = parseInt(nbOfGuest, 10);
      // Get access token
      const token = localStorage.getItem('token');

      axios.post(`${apiBaseUrl}/tickets`, {
        name,
        comment,
        guest,
        estimatedTime,
        status,
        restaurant,
      }, { headers: { Authorization: `Bearer ${token}` } })
        .then(() => {
          // Get new tickets array with the added ticket
          axios.get(`${apiBaseUrl}/tickets/restaurants/${restaurantId}`, {
            headers: { Authorization: `Bearer ${token}` },
          })
            .then((res) => {
              // Then we filtered on it to get only items with status 1
              const filteredArr = res.data.filter((item) => item.status === 1);
              // We put this filtered array in the state to refresh the new ticket list
              store.dispatch(setTickets(filteredArr));
              // Refreshing the counter with the length of our filtered array
              store.dispatch(setTicketCounter(filteredArr.length));
              // Refreshing the next ticket hour in TimeInterval
              store.dispatch(setNextTicketHour());
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

    default:
      next(action);
  }
};
export default backOffRestoMiddleware;
