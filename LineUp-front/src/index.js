// == Import : npm
import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';


import { getUserInfo, getRestauInfos, loadTicketInfos } from 'src/actions/profile';
import {
 loadRestaurants
} from 'src/actions/restaurant';
import { logInSuccess, setToken } from 'src/actions/auth';
import store from './store/index';

// == Import : Composants
import App from './containers/App/index';

const token = localStorage.getItem('token');
const user = localStorage.getItem('user')
const data = JSON.parse(localStorage.getItem('user'));
const restau = JSON.parse(localStorage.getItem('restau'));
setToken(token);

if (token && restau) {
  store.dispatch(getUserInfo(data));
  store.dispatch(getRestauInfos(restau));
  store.dispatch(logInSuccess());
}
else if (token && user) {
  store.dispatch(getUserInfo(data));
 
  store.dispatch(loadRestaurants())
  store.dispatch(logInSuccess());
}

// == Render
const rootReactElement = (
  <Provider store={store}>
    <App />
  </Provider>
);
// La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');
// Déclenchement du rendu de React (virtuel) => DOM (page web)
render(rootReactElement, target);
