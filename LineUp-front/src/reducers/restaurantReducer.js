import {
  TOGGLE_INFOS_DISPLAY,
  SAVE_RESTAURANTS,
  CHANGE_FIELD,
  CHANGE_SEARCHBAR_FIELD,
  TOGGLE_LOADING_HOME,
  IS_MODAL_OPEN,
} from 'src/actions/restaurant';


const initialState = {
  // Data from API
  restaurantsArr: [],
  // Infos state
  isOpenInfosDisplay: false,
  // SearchBar state
  searchbarContent: '',
  // Home state
  isLoadingHome: true,
  // RestaurantPage
  isModalOpen: false,
};

function restaurantReducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_INFOS_DISPLAY:
      return {
        ...state,
        isOpenInfosDisplay: !state.isOpenInfosDisplay,
      };
    case TOGGLE_LOADING_HOME:
      return {
        ...state,
        isLoadingHome: action.bool,
      };
    case SAVE_RESTAURANTS:
      return {
        ...state,
        restaurantsArr: action.arrayFromApi,
      };
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.newValue,
      };
    case CHANGE_SEARCHBAR_FIELD:
      return {
        ...state,
        searchbarContent: action.newValue,
      };
    
    case IS_MODAL_OPEN:
      return {
        ...state,
        isModalOpen : !state.isModalOpen,
      };
  

    default:
      return state;
  }
}

export default restaurantReducer;
