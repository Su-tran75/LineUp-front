export const TOGGLE_INFOS_DISPLAY = 'TOGGLE_INFOS_DISPLAY';
export const LOAD_RESTAURANTS = 'LOAD_RESTAURANTS';
export const SAVE_RESTAURANTS = 'SAVE_RESTAURANTS';
export const CHANGE_SEARCHBAR_FIELD = 'CHANGE_SEARCHBAR_FIELD';
export const SEND_SEARCH_FROM_HOME = 'SEND_SEARCH_FROM_HOME';
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const TOGGLE_LOADING_HOME = 'TOGGLE_LOADING_HOME';
export const IS_MODAL_OPEN = 'IS_MODAL_OPEN';

export const isModalOpen = () => ({
  type: IS_MODAL_OPEN,
});

export const toggleInfosDisplay = () => ({
  type: TOGGLE_INFOS_DISPLAY,
});

export const loadRestaurants = () => ({
  type: LOAD_RESTAURANTS,
});

export const saveRestaurants = (arrayFromApi) => ({
  type: SAVE_RESTAURANTS,
  arrayFromApi,
});

export const changeSearchbarField = (newValue) => ({
  type: CHANGE_SEARCHBAR_FIELD,
  newValue,
});

export const sendSearchFromHome = () => ({
  type: SEND_SEARCH_FROM_HOME,
});

export const changeField = (newValue, name) => ({
  type: CHANGE_FIELD,
  newValue,
  name,
});

export const toggleLoadingHome = (bool) => ({
  type: TOGGLE_LOADING_HOME,
  bool,
});
