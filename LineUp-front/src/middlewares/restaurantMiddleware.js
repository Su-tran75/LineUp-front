/* eslint-disable implicit-arrow-linebreak */
import axios from 'axios';

import {
  LOAD_RESTAURANTS,
  saveRestaurants,
  SEND_SEARCH_FROM_HOME,
  toggleLoadingHome,
} from 'src/actions/restaurant';

const apiBaseUrl = 'http://35.172.191.94/lineup/public/api';

const restaurantMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    // Load restaurant in Home
    case LOAD_RESTAURANTS: {
      // Set the loader
      store.dispatch(toggleLoadingHome(true));

      axios.get(`${apiBaseUrl}/restaurants`)
        .then((response) => {
          // Filtered the answer to get only restaurants which accept tickets (status === 1)
          const openRestaurants = response.data.filter((item) => item.status === 1);
          // Then we put it in the state
          store.dispatch(saveRestaurants(openRestaurants));
          // Unset the loader
          store.dispatch(toggleLoadingHome(false));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case SEND_SEARCH_FROM_HOME: {
      // Enable loader
      store.dispatch(toggleLoadingHome(true));
      // Get searchbarContent from the state
      const { searchbarContent } = store.getState().restaurant;
      // Make a GET request to got all restaurants
      axios.get(`${apiBaseUrl}/restaurants`)
        .then((response) => {
          // We get the full restaurant array & filter it by his name in lowercase
          const filteredArr = response.data.filter((item) =>
            item.name.toLowerCase().includes(searchbarContent.toLowerCase()));
          // We put our filtered array in restaurants array from state
          store.dispatch(saveRestaurants(filteredArr));
          // We disable loader
          store.dispatch(toggleLoadingHome(false));
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
export default restaurantMiddleware;
