import { combineReducers } from 'redux';
// on importe tous les reducers
import restaurantReducer from './restaurantReducer';
import backOffAdminReducer from './backOffAdminReducer';
import authReducer from './authReducer';
import backOffRestoReducer from './backOffRestoReducer';
import profileReducer from './profileReducer';
import ticketReducer from './ticketReducers';

// le reducer principal, qui regroupe les autres
// combineReducers prend en argument un objet qui indique un nom pour
// chaque reducer
const rootReducer = combineReducers({
  // nom du tiroir : reducer qui gère cette partie du state
  backOffResto: backOffRestoReducer,
  backOffAdmin: backOffAdminReducer,
  restaurant: restaurantReducer,
  auth: authReducer,
  profile: profileReducer,
  ticket: ticketReducer,
});
export default rootReducer;
