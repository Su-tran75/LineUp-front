import axios from 'axios';

import {
  LOG_IN,
  SAVE_USER,
  REMOVE_TOKEN,
  UPDATE_USER_INFOS,
  DELETE_USER_FROM_USER,
  logInSuccess,
  logInFail,
  signUpSuccess,
  logOut,
  setToken,
} from 'src/actions/auth';
import {
  getUserInfo, getRestauInfos, CHANGE_PASSWORD_IN_DB, loadTicketInfos,
} from 'src/actions/profile';
import { setIntervalValue } from 'src/actions/backOffResto';

const apiBaseUrl = 'http://35.172.191.94/lineup/public/api';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    // Action triggered when user click on logout button
    case REMOVE_TOKEN: {
      // Cleaning local storage
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('restau');
      // Refreshing the state
      store.dispatch(logOut());

      next(action);
      break;
    }
    case CHANGE_PASSWORD_IN_DB: {
      // Get access token
      const token = localStorage.getItem('token');
      // We get the necessary values in the state
      const { newPassword } = store.getState().profile;
      const { id } = store.getState().profile.user;
      // Change var name to match with DB
      const password = newPassword;
      axios.patch(`${apiBaseUrl}/users/${id}`, {
        password,
      }, { headers: { Authorization: `Bearer ${token}` } })
        .then(() => {

        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }

    // Action triggered during SignUp form submission
    case SAVE_USER: {
      // We get the necessary values in the state entered by the user
      const {
        firstname,
        lastname,
        password,
        email,
        phoneNumber,
        avatar,
        roles,
        favorite,
      } = store.getState().auth;

      // Then send these informations to DB
      axios.post(`${apiBaseUrl}/users`, {
        firstname,
        lastname,
        password,
        email,
        phoneNumber,
        avatar,
        roles,
        favorite,
      }).then(() => {
        // Dispatch action to show the connection form
        store.dispatch(signUpSuccess());
      })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }

    case LOG_IN: {
      // We get the necessary values in the state
      const {
        password,
        email,
      } = store.getState().auth;
      // Change var names to match with db
      const username = email;

      axios.post(`${apiBaseUrl}/login`, {
        password,
        username,
      })
        .then((response) => {
          // Put user's info in the state
          store.dispatch(getUserInfo(response.data.data));
          // Put the state isLogged === true
          store.dispatch(logInSuccess());
          // Put token & user's info in local storage
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('user', JSON.stringify(response.data.data));
          // Put the token in the state
          store.dispatch(setToken(response.data.token));
          // Load ticket info only for users
          if (response.data.data.roles[0] === 'ROLE_USER') {
            store.dispatch(loadTicketInfos());
          }

          // If a restaurant is connecting :
          // we get its id
          const id = response.data.data.restaurantId;
          // if this id != null we make our request
          if (id != null) {
            axios.get(`${apiBaseUrl}/restaurants/${id}`)
              .then((res) => {
                // Put restaurant info in the state
                store.dispatch(getRestauInfos(res.data));
                // Put restaurant info in local storage
                localStorage.setItem('restau', JSON.stringify(res.data));
                // Put restaurant's time interval in the state
                store.dispatch(setIntervalValue(res.data.time_interval));
              });
          }
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }

    case UPDATE_USER_INFOS: {
      // Get user id in the state
      const { id } = store.getState().profile.user;
      // Get acces token
      const token = localStorage.getItem('token');

      axios.get(`${apiBaseUrl}/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((r) => {
          // Put new user's values in the state
          store.dispatch(getUserInfo(r.data));
          // Cleaning local storage
          localStorage.removeItem('user');
          // Then put new user's values on local storage
          localStorage.setItem('user', JSON.stringify(r.data));
        });

      next(action);
      break;
    }
    case DELETE_USER_FROM_USER: {
      // Get the id of user to delete
      const { id } = store.getState().profile.user;
      // Get access token
      const token = localStorage.getItem('token');
      // Cleaning local storage
      localStorage.removeItem('user');
      localStorage.removeItem('token');

      axios.delete(`${apiBaseUrl}/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(() => {
          // Dispatch action to show the connection form
          store.dispatch(logOut());
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default authMiddleware;
