import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import ticketMiddleware from 'src/middlewares/ticketMiddleware';
import restaurantMiddleware from 'src/middlewares/restaurantMiddleware';
import backOffAdminMiddleware from 'src/middlewares/backOffAdminMiddleware';
import backOffRestoMiddleware from 'src/middlewares/backOffRestoMiddleware';
import authMiddleware from 'src/middlewares/authMiddleware';
import reducer from '../reducers/index';

const enhancers = composeWithDevTools(
  applyMiddleware(
    restaurantMiddleware,
    backOffAdminMiddleware,
    backOffRestoMiddleware,
    authMiddleware,
    ticketMiddleware,
    // ... other middlewares
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
