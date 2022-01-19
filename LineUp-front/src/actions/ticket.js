
// === action types
export const INCREMENT_GUEST = 'INCREMENT_GUEST';
export const DECREMENT_GUEST = 'DECREMENT_GUEST';
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const SEND_TICKET_TO_DB = 'SEND_TICKET_TO_DB';
export const ARCHIVE_TICKET = 'ARCHIVE_TICKET';
export const UPDATE_USER_TICKET = 'UPDATE_USER_TICKET'
export const ARCHIVE_TICKET_USER = 'ARCHIVE_TICKET_USER'
export const LOAD_TICKET_LIST = 'LOAD_TICKET_LIST'
export const POPULATE_TICKET_LIST = 'POPULATE_TICKET_LIST'
export const GET_INTERVAL_VALUE = 'GET_INTERVAL_VALUE'

// === action creators
export const incrementGuest = (name) => ({
  type: INCREMENT_GUEST,
  /* value: newValue, */
  name,
});

export const decrementGuest = (name) => ({
  type: DECREMENT_GUEST,
  name,
});

export const changeField = (newValue, name) => ({
  type: CHANGE_FIELD,
  newValue,
  name,
});

export const sendTicketToDb = () => ({
  type: SEND_TICKET_TO_DB,

});

export const archiveTicket = () => ({
  type: ARCHIVE_TICKET,

});

export const archiveTicketResto = () => ({
  type : ARCHIVE_TICKET_USER
})

export const updateUserTicket = () => ({
  type : UPDATE_USER_TICKET
})
  
export const loadTicketList = () => ({
  type : LOAD_TICKET_LIST
})

export const populateTicketList = (data) => ({
  type: POPULATE_TICKET_LIST, 
  data
})

export const getIntervalValue = (data) => ({
  type: GET_INTERVAL_VALUE, 
  data
})