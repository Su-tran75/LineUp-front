export const CHANGE_FIELD = 'CHANGE_FIELD';
export const ADD_RESTAURANT_TO_DB = 'ADD_RESTAURANT_TO_DB';
export const TOGGLE_FORM_DISPLAY = 'TOGGLE_FORM_DISPLAY';
export const SEND_SEARCH_SUBMIT = 'SEND_SEARCH_SUBMIT';
export const SET_OPEN_SELECT = 'SET_OPEN_SELECT';
export const SET_RESTAURANTS_RESULT = 'SET_RESTAURANTS_RESULT';
export const SET_USERS_RESULT = 'SET_USERS_RESULT';
export const CHANGE_PASSWORD_FIELD = 'CHANGE_PASSWORD_FIELD';
export const CHANGE_SEARCHBAR_FIELD = 'CHANGE_SEARCHBAR_FIELD';
export const SET_USER_COUNTER = 'SET_USER_COUNTER';
export const SET_RESTAURANT_COUNTER = 'SET_RESTAURANT_COUNTER';
export const SET_FILE_PICTURE = 'SET_FILE_PICTURE';
export const DELETE_USER = 'DELETE_USER';
export const DELETE_RESTAURANT = 'DELETE_RESTAURANT';
export const SET_ID_TO_DELETE = 'SET_ID_TO_DELETE';

export const changePasswordField = (newValue) => ({
  type: CHANGE_PASSWORD_FIELD,
  newValue,
});

export const setOpenSelect = () => ({
  type: SET_OPEN_SELECT,
});

export const changeField = (newValue, name) => ({
  type: CHANGE_FIELD,
  newValue,
  name,
});

export const addRestaurant = () => ({
  type: ADD_RESTAURANT_TO_DB,
});

export const toggleFormDisplay = () => ({
  type: TOGGLE_FORM_DISPLAY,
});

export const sendSearchSubmit = () => ({
  type: SEND_SEARCH_SUBMIT,
});

export const changeSearchbarField = (newValue) => ({
  type: CHANGE_SEARCHBAR_FIELD,
  newValue,
});

export const setRestaurantResult = (newArr) => ({
  type: SET_RESTAURANTS_RESULT,
  newArr,
});

export const setUsersResult = (newArr) => ({
  type: SET_USERS_RESULT,
  newArr,
});

export const setUserCounter = (newValue) => ({
  type: SET_USER_COUNTER,
  newValue,
});

export const setRestaurantCounter = (newValue) => ({
  type: SET_RESTAURANT_COUNTER,
  newValue,
});

export const setFilePicture = (newValue) => ({
  type: SET_FILE_PICTURE,
  newValue,
});

export const deleteRestaurant = () => ({
  type: DELETE_RESTAURANT,
});

export const deleteUser = () => ({
  type: DELETE_USER,
});

export const setIdToDelete = (newId) => ({
  type: SET_ID_TO_DELETE,
  newId,
});
