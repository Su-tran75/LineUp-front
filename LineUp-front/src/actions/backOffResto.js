export const SEND_STATUS_TO_DB = 'SEND_STATUS_TO_DB';
export const SET_STATUS = 'SET_STATUS';
export const SEND_INTERVAL_TO_DB = 'SEND_INTERVAL_TO_DB';
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const INCREMENT_INTERVAL = 'INCREMENT_INTERVAL';
export const DECREMENT_INTERVAL = 'DECREMENT_INTERVAL';
export const INCREMENT_GUEST = 'INCREMENT_GUEST';
export const DECREMENT_GUEST = 'DECREMENT_GUEST';
export const SEND_TICKET_TO_DB_FROM_BO = 'SEND_TICKET_TO_DB_FROM_BO';
export const SEND_EMAIL_TO_ADMIN = 'SEND_EMAIL_TO_ADMIN';
export const LOAD_TICKETS = 'LOAD_TICKETS';
export const SET_TICKETS = 'SET_TICKETS';
export const SET_TICKET_COUNTER = 'SET_TICKET_COUNTER';
export const SET_OPEN_SELECT = 'SET_OPEN_SELECT';
export const ARCHIVE_TICKET_FROM_BO = 'ARCHIVE_TICKET_FROM_BO';
export const SET_CURRENT_TICKET = 'SET_CURRENT_TICKET';
export const UPDATE_USER_TICKET_FROM_BO = 'UPDATE_USER_TICKET_FROM_BO'
export const SET_FILE_PICTURE = 'SET_FILE_PICTURE';
export const SET_NEXT_TICKET_HOUR = 'SET_NEXT_TICKET_HOUR';
export const SET_INTERVAL_VALUE = 'SET_INTERVAL_VALUE';
export const TOGGLE_IS_LOADING_TICKET = 'TOGGLE_IS_LOADING_TICKET';

export const setFilePicture = (file) => ({
  type: SET_FILE_PICTURE,
  file,
});

export const setIntervalValue = (value) => ({
  type: SET_INTERVAL_VALUE,
  value,
});

export const setOpenSelect = () => ({
  type: SET_OPEN_SELECT,
});

export const toggleIsLoadingTicket = (bool) => ({
  type: TOGGLE_IS_LOADING_TICKET,
  bool,
});

export const setTicketCounter = (newValue) => ({
  type: SET_TICKET_COUNTER,
  newValue,
});

export const setTickets = (newArr) => ({
  type: SET_TICKETS,
  newArr,
});

export const loadTickets = () => ({
  type: LOAD_TICKETS,
});

export const sendEmailToAdmin = () => ({
  type: SEND_EMAIL_TO_ADMIN,
});

export const sendStatusToDb = (newValue) => ({
  type: SEND_STATUS_TO_DB,
  newValue,
});

export const changeField = (newValue, name) => ({
  type: CHANGE_FIELD,
  newValue,
  name,
});

export const setStatus = () => ({
  type: SET_STATUS,
});

export const sendIntervalToDb = (newValue) => ({
  type: SEND_INTERVAL_TO_DB,
  newValue,
});

export const incrementInterval = (name) => ({
  type: INCREMENT_INTERVAL,
  name,
});

export const decrementInterval = (name) => ({
  type: DECREMENT_INTERVAL,
  name,
});

export const incrementGuest = (name) => ({
  type: INCREMENT_GUEST,
  name,
});

export const decrementGuest = (name) => ({
  type: DECREMENT_GUEST,
  name,
});

export const sendTicketToDbFromBo = () => ({
  type: SEND_TICKET_TO_DB_FROM_BO,
});

export const archiveTicketFromBo = () => ({
  type: ARCHIVE_TICKET_FROM_BO,
});

export const updateUserFromBo = () => ({
  type: UPDATE_USER_TICKET_FROM_BO,
});

export const setCurrentTicket = (newId) => ({
  type: SET_CURRENT_TICKET,
  newId,
});

export const setNextTicketHour = () => ({
  type: SET_NEXT_TICKET_HOUR,
});
