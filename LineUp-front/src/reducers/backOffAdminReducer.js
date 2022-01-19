import {
  CHANGE_FIELD,
  TOGGLE_FORM_DISPLAY,
  SET_OPEN_SELECT,
  CHANGE_PASSWORD_FIELD,
  CHANGE_SEARCHBAR_FIELD,
  SET_RESTAURANTS_RESULT,
  SET_USERS_RESULT,
  SET_RESTAURANT_COUNTER,
  SET_USER_COUNTER,
  SET_FILE_PICTURE,
  SET_ID_TO_DELETE,
} from 'src/actions/backOffAdmin';

const initialState = {
  // AddFormResto state
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  phoneNumber: '',
  city: '',
  postalCode: '',
  adress: '',
  restaurantName: '',
  role: 'ROLE_RESTAURANT',
  cuisineTypeId: 0,
  siret: '',
  filePicture: '',
  tradeName: '',
  isOpenSelect: false,
  // BackOffAdmin state
  isOpenFormDisplay: false,
  searchbarContent: '',
  restaurantsResult: [],
  usersResult: [],
  // ResultsBackOffAdmin state from BackOffAdmin
  userCounter: 0,
  restaurantCounter: 0,
  idToDelete: null,
};

function backOffAdminReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_OPEN_SELECT:
      return {
        ...state,
        isOpenSelect: !state.isOpenSelect,
      };
    case SET_ID_TO_DELETE:
      return {
        ...state,
        idToDelete: action.newId,
      };
    case SET_FILE_PICTURE:
      return {
        ...state,
        filePicture: action.newValue,
      };
    case CHANGE_PASSWORD_FIELD:
      return {
        ...state,
        password: action.newValue,
      };
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.newValue,
      };

    case TOGGLE_FORM_DISPLAY:
      return {
        ...state,
        isOpenFormDisplay: !state.isOpenFormDisplay,
      };
    case CHANGE_SEARCHBAR_FIELD:
      return {
        ...state,
        searchbarContent: action.newValue,
      };
    case SET_USER_COUNTER:
      return {
        ...state,
        userCounter: action.newValue,
      };
    case SET_RESTAURANT_COUNTER:
      return {
        ...state,
        restaurantCounter: action.newValue,
      };
    case SET_RESTAURANTS_RESULT:
      return {
        ...state,
        restaurantsResult: action.newArr,
      };
    case SET_USERS_RESULT:
      return {
        ...state,
        usersResult: action.newArr,
      };
    default:
      return state;
  }
}

export default backOffAdminReducer;
