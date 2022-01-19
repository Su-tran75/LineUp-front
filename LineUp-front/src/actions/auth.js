export const GET_NEW_USER = 'GET_NEW_USER';
export const LOG_IN = 'LOG_IN';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAIL = 'LOG_IN_FAIL';
export const SAVE_USER = 'SAVE_USER';
export const LOG_OUT = 'LOG_OUT';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const DISPLAY_SIGN_UP = 'DISPLAY_SIGN_UP';
export const DISPLAY_SIGN_UP_RESTO = 'DISPLAY_SIGN_UP_RESTO';
export const DISPLAY_LOGIN = 'DISPLAY_LOGIN';
export const REMOVE_TOKEN = 'REMOVE_TOKEN';
export const SET_TOKEN = 'SET_TOKEN';
export const SET_AVATAR = 'SET_AVATAR';
export const UPDATE_USER_INFOS = 'UPDATE_USER_INFOS'
export const DELETE_USER_FROM_USER ='DELETE_USER_FROM_USER'

// on a un payload avec deux informations
export const setToken = (token) => ({
  type: SET_TOKEN,
  token,
});

// on a un payload avec deux informations
export const removeToken = () => ({
  type: REMOVE_TOKEN,
});

// on a un payload avec deux informations
export const getNewUser = (newValue, name) => ({
  type: GET_NEW_USER,
  newValue,
  name,
});

export const logIn = () => ({
  type: LOG_IN,
});

// 3 dessous gere l'affichage des differentes pages de connexions
export const displayLogin = () => ({
  type: DISPLAY_LOGIN,
});

export const displaySignUp = () => ({
  type: DISPLAY_SIGN_UP,
});

export const displaySignUpResto = () => ({
  type: DISPLAY_SIGN_UP_RESTO,
});

export const logInSuccess = (data) => ({
  type: LOG_IN_SUCCESS,
  data,
});

export const signUpSuccess = (data) => ({
  type: SIGN_UP_SUCCESS,
  data,
});

export const logInFail = () => ({
  type: LOG_IN_FAIL,
});

export const saveUser = (newUser) => ({
  type: SAVE_USER,
  newUser,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const setAvatar = (base64) => ({
  type: SET_AVATAR,
  base64,
});

export const updateUserInfo = () => ({
  type: UPDATE_USER_INFOS,
});

export const deleteUserFromeUser = () => ({
  type: DELETE_USER_FROM_USER
})