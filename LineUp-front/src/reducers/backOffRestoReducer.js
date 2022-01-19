import {
  SET_STATUS,
  CHANGE_FIELD,
  INCREMENT_INTERVAL,
  DECREMENT_INTERVAL,
  INCREMENT_GUEST,
  DECREMENT_GUEST,
  SET_OPEN_SELECT,
  SET_TICKETS,
  SET_TICKET_COUNTER,
  SET_CURRENT_TICKET,
  SET_FILE_PICTURE,
  SET_NEXT_TICKET_HOUR,
  SET_INTERVAL_VALUE,
  TOGGLE_IS_LOADING_TICKET,
} from 'src/actions/backOffResto';

const initialState = {
  // BackOffResto state
  // If restaurant accept new ticket or not
  status: true,
  // Interval state
  intervalValue: 10,
  nextTicketHour: 10,
  // GetTicket state
  nbOfGuest: 0,
  nameOnTicket: '',
  commentOnTicket: '',
  // RestoForm state
  firstname: '',
  lastname: '',
  email: '',
  phoneNumber: '',
  city: '',
  postalCode: '',
  adress: '',
  restaurantName: '',
  cuisineTypeId: null,
  siret: '',
  picture: '',
  tradeName: '',
  isOpenSelect: false,
  // TicketLine state
  tickets: [],
  ticketCounter: 0,
  isLoadingTickets: true,
  // TicketMini state
  currentTicket: {},
};

function backOffRestoReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_OPEN_SELECT:
      return {
        ...state,
        isOpenSelect: !state.isOpenSelect,
      };
    case TOGGLE_IS_LOADING_TICKET:
      return {
        ...state,
        isLoadingTickets: action.bool,
      };
    case SET_INTERVAL_VALUE:
      return {
        ...state,
        intervalValue: action.value,
      };
    case SET_NEXT_TICKET_HOUR:
      return {
        ...state,
        nextTicketHour: ((state.ticketCounter * state.intervalValue) + state.intervalValue),
      };
    case SET_FILE_PICTURE:
      return {
        ...state,
        picture: action.file,
      };
    case SET_CURRENT_TICKET:
      return {
        ...state,
        currentTicket: action.newId,
      };
    case SET_TICKETS:
      return {
        ...state,
        tickets: action.newArr,
      };
    case SET_TICKET_COUNTER:
      return {
        ...state,
        ticketCounter: action.newValue,
      };
    case SET_STATUS:
      return {
        ...state,
        status: !state.status,
      };
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.newValue,
      };
    case INCREMENT_INTERVAL:
      return {
        ...state,
        [action.name]: state.intervalValue + 1,
      };
    case DECREMENT_INTERVAL:
      return {
        ...state,
        [action.name]: state.intervalValue - 1,
      };
    case INCREMENT_GUEST:
      return {
        ...state,
        [action.name]: state.nbOfGuest + 1,
      };
    case DECREMENT_GUEST:
      return {
        ...state,
        [action.name]: state.nbOfGuest - 1,
      };
    default:
      return state;
  }
}

export default backOffRestoReducer;
