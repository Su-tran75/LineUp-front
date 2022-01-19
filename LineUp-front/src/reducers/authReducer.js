import {
  LOG_OUT,
  GET_NEW_USER,
  LOG_IN_SUCCESS,
  SIGN_UP_SUCCESS,
  DISPLAY_LOGIN,
  DISPLAY_SIGN_UP,
  DISPLAY_SIGN_UP_RESTO,
  SET_TOKEN,
  SET_AVATAR,
} from 'src/actions/auth';

const initialState = {
  // pour creer un nouveau user
  firstname: '',
  lastname: '',
  password: '',
  email: '',
  phoneNumber: '',
  avatar: '',
  roles: ['ROLE_USER'],
  favorite: null,
  current_ticket: null,
  restaurantId: null,
  token: null,
  // pour login
  isLogged: false,
  toDisplay: 1,
};

function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_NEW_USER:
      return {
        ...state,
        [action.name]: action.newValue,
      };

    case SIGN_UP_SUCCESS:
      return {
        ...state,
        toDisplay: 1,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        isLogged: true,
      };
    case LOG_OUT:
      return {
        ...state,
        toDisplay: 1,
        isLogged: false,
      };
    case SET_AVATAR:
      return {
        ...state,
        avatar: action.base64,
      };
    case DISPLAY_LOGIN:
      return {
        ...state,
        toDisplay: 1,
      };
    case DISPLAY_SIGN_UP:
      return {
        ...state,
        toDisplay: 2,
      };
    case DISPLAY_SIGN_UP_RESTO:
      return {
        ...state,
        toDisplay: 3,
      };

    default:
      return state;
  }
}

export default authReducer;
