/* eslint-disable implicit-arrow-linebreak */
import axios from 'axios';
import emailjs from 'emailjs-com';

import {
  ADD_RESTAURANT_TO_DB,
  SEND_SEARCH_SUBMIT,
  setRestaurantResult,
  setUsersResult,
  setUserCounter,
  setRestaurantCounter,
  DELETE_RESTAURANT,
  DELETE_USER,
} from 'src/actions/backOffAdmin';

const apiBaseUrl = 'http://35.172.191.94/lineup/public/api';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_RESTAURANT_TO_DB: {
      // 0.1 We get all we need from the state
      const {
        firstname,
        lastname,
        email,
        password,
        phoneNumber,
        city,
        postalCode,
        adress,
        restaurantName,
        cuisineTypeId,
        siret,
        tradeName,
        filePicture,
      } = store.getState().backOffAdmin;

      // Transform var names to match with DB
      const picture = filePicture;
      const cuisineType = cuisineTypeId;

      // 0.2 We put default values for some vars
      const roles = ['ROLE_RESTAURANT'];
      const timeInterval = 10;
      const status = 1;

      // 0.3 We change vars names to match with database
      const name = restaurantName;
      const zip = postalCode;

      // 1. We add a user
      axios.post(`${apiBaseUrl}/users`, {
        firstname,
        lastname,
        email,
        password,
        phoneNumber,
        roles,
      })
        .then((response) => {
          // 1.1 We get his id from response
          const owner = response.data.id;
          // Get access token
          const token = localStorage.getItem('token');

          // 2. We add a restaurant & bind owner id to this restaurant
          axios.post(`${apiBaseUrl}/restaurants`, {
            phoneNumber,
            timeInterval,
            cuisineType,
            siret,
            tradeName,
            owner,
            name,
            picture,
            zip,
            city,
            adress,
            status,
          }, { headers: { Authorization: `Bearer ${token}` } })
            .then((res) => {
              // 2.1 We get his id from new response
              const restaurantId = res.data.id;

              // 3. We patch user to bind him his retaurant Id
              axios.patch(`${apiBaseUrl}/users/${owner}`, {
                restaurantId,
              }, { headers: { Authorization: `Bearer ${token}` } })
                .then(() => {
                  // 4.1 We advert restaurant about his account creation & send ids to connect
                  emailjs.send(
                    'service_hq54t19', 'template_fymw3vc',
                    {
                      firstname,
                      lastname,
                      password,
                      email,
                    }, 'user_HM2pyLlmFfa12ayK6aIXJ',
                  )
                    .then(() => {
                      // 4.1 The whole process is a success, we warn the Admin
                      window.alert(`Ajout de ${name} effectué avec succès !`);
                    })
                    // Handle errors here however you like, or use a React error boundary
                    .catch((err) => {
                      console.error('Erreur dans l\'envoi d\'email', err);
                    });
                })
                .catch((er) => {
                  console.log(er);
                  // Catch patch user
                });
            })
            .catch((err) => {
              // Catch add restaurant
              console.log(err);
            });
        })
        .catch((error) => {
          // Catch add user
          console.log(error);
        });

      next(action);
      break;
    }

    case SEND_SEARCH_SUBMIT: {
      // Get user's research terms
      const { searchbarContent } = store.getState().backOffAdmin;
      // Firstly lets make a GET request to got all restaurants
      axios.get(`${apiBaseUrl}/restaurants`)
        .then((response) => {
          // We get the full restaurant array & filter it by his name in lowercase
          const filteredRestaurantArr = response.data.filter((item) =>
            item.name.toLowerCase().includes(searchbarContent.toLowerCase()));
          // We put our filtered array in restaurants array from state
          store.dispatch(setRestaurantResult(filteredRestaurantArr));
          store.dispatch(setRestaurantCounter(filteredRestaurantArr.length));
          // Get access token
          const token = localStorage.getItem('token');

          // Secondly lets make a GET request on all users
          axios.get(`${apiBaseUrl}/users`, {
            headers: { Authorization: `Bearer ${token}` },
          })
            .then((res) => {
              // We get the full user array & filter it by his name in lowercase
              const filteredUserArr = res.data.filter((item) =>
                item.lastname.toLowerCase().includes(searchbarContent.toLowerCase()));
              // We put our filtered array in users array from state
              store.dispatch(setUsersResult(filteredUserArr));
              store.dispatch(setUserCounter(filteredUserArr.length));
            })
            .catch((err) => {
              // Catch users
              console.log(err);
            });
        })
        .catch((error) => {
          // Catch restaurants
          console.log(error);
        });

      next(action);
      break;
    }
    case DELETE_RESTAURANT: {
      // Get the id of entity to delete
      const { idToDelete } = store.getState().backOffAdmin;
      // Get access token
      const token = localStorage.getItem('token');

      axios.delete(`${apiBaseUrl}/restaurants/${idToDelete}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case DELETE_USER: {
      // Get the id of entity to delete
      const { idToDelete } = store.getState().backOffAdmin;
      // Get access token
      const token = localStorage.getItem('token');

      axios.delete(`${apiBaseUrl}/users/${idToDelete}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }

    default:
      // we send action to the next middleware or reducer
      next(action);
  }
};
export default authMiddleware;
