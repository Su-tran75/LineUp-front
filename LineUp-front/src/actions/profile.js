export const GET_USER_INFO = 'GET_USER_INFO';
export const GET_TICKET_INFO = 'GET_TICKET_INFO';
export const LOAD_TICKET_INFOS = 'LOAD_TICKET_INFOS';
export const UPDATE_USER_TICKET = 'UPDATE_USER_TICKET';
export const GET_RESTAU_INFOS = 'GET_RESTAU_INFOS';
export const TOGGLE_IS_OPEN_MODAL = 'TOGGLE_IS_OPEN_MODAL';
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const CHANGE_PASSWORD_IN_DB = 'CHANGE_PASSWORD_IN_DB';

export const getUserInfo = (data) => ({
  type: GET_USER_INFO,
  data,
});

export const getRestauInfos = (data) => ({
  type: GET_RESTAU_INFOS,
  data,
});

export const getTicketInfos = (data) => ({
  type: GET_TICKET_INFO,
  data,
});

export const loadTicketInfos = (data) => ({
  type: LOAD_TICKET_INFOS,
  data,
});

export const updateUserTicket = () => ({
  type: UPDATE_USER_TICKET,
});

export const toggleIsOpenModal = () => ({
  type: TOGGLE_IS_OPEN_MODAL,
});

export const changePasswordInDb = () => ({
  type: CHANGE_PASSWORD_IN_DB,
});

export const changeField = (newValue, name) => ({
  type: CHANGE_FIELD,
  newValue,
  name,
});
