import {
  INCREMENT_GUEST,
  DECREMENT_GUEST,
  CHANGE_FIELD,
  GET_INTERVAL_VALUE
} from 'src/actions/ticket';

const initialState = {
  // ici l'état initial
  guest: 5,
  name: '',
  comment: '',
  estimatedTime: null,
  status: 1,
};

function ticketMiddleware(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT_GUEST:
      return {
        ...state,
        [action.name]: state.guest + 1,
      };

    case DECREMENT_GUEST:
      return {
        ...state,
        [action.name]: state.guest - 1,
      };

    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.newValue,
      };

    case GET_INTERVAL_VALUE:
      return {
        ...state,
        estimatedTime: action.data,
      };

    default:
      return state;
  }
}

export default ticketMiddleware;
