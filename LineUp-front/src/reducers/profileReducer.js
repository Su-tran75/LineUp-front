import {
  GET_USER_INFO,
  GET_TICKET_INFO,
  GET_RESTAU_INFOS,
  TOGGLE_IS_OPEN_MODAL,
  CHANGE_FIELD,
} from 'src/actions/profile';
import { POPULATE_TICKET_LIST } from 'src/actions/ticket';

const initialState = {
  user: {},
  ticket: {},
  restaurant: {},
  ticketList: [],
  // Profile state
  oldPassword: '',
  newPassword: '',
  newPasswordVerif: '',
  isOpenModal: false,
};

function profileReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_USER_INFO:
      return {
        ...state,
        user: action.data,
      };
    case TOGGLE_IS_OPEN_MODAL:
      return {
        ...state,
        isOpenModal: !state.isOpenModal,
      };

    case GET_RESTAU_INFOS:
      return {
        ...state,
        restaurant: action.data,
      };

    case GET_TICKET_INFO:
      return {
        ...state,
        user: { ...state.user, current_ticket: action.data.id },
        ticket: action.data,
      };

    case POPULATE_TICKET_LIST:
      return {
        ...state,
        ticketList: action.data,
      };
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.newValue,
      };
    default:
      return state;
  }
}

export default profileReducer;
