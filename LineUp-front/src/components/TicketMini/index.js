/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CheckIcon from '@material-ui/icons/Check';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import './ticketMini.scss';

const TicketMini = ({
  guest,
  comment,
  estimated_time,
  name,
  archiveTicketFromBo,
  id,
  setCurrentTicket,
  ticket,
  updateUserFromBo,
  user,
}) => {
  const handleButton = () => {
    // Put the clicked ticket in the state to access it easily in middleware
    setCurrentTicket(ticket);
    archiveTicketFromBo();
    updateUserFromBo();
  };
  return (
    <div className="ticket-mini-component">
      <div className="ticket-mini-top-container">
        <div className="ticket-mini-hour">{estimated_time}min</div>
        <div className="ticket-mini-name">{name}</div>
        <div className="ticket-mini-guests">{guest} <RestaurantIcon /></div>
      </div>
      <div className="ticket-mini-comment">{comment}</div>
      {user !== null ? <div className="ticket-mini-phone">{user.phone_number}</div> : <div className="ticket-mini-phone">Anonyme</div>}
      <div className="ticket-mini-btn-container">
        <button
          name={id}
          className="ticket-mini-btn-delete"
          type="button"
          onClick={handleButton}
        >
          <DeleteForeverIcon />
        </button>
        {/* <button
          name={id}
          className="ticket-mini-btn-edit"
          type="button"
          onClick={handlePhoneButton}
        >
          <PhoneEnabledIcon />
        </button> */}
        <button
          name={id}
          className="ticket-mini-btn-valid"
          type="button"
          onClick={handleButton}
        >
          <CheckIcon />
        </button>
      </div>
    </div>
  );
};
TicketMini.propTypes = {
  ticket: PropTypes.object.isRequired,
  archiveTicketFromBo: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  guest: PropTypes.number.isRequired,
  estimated_time: PropTypes.number.isRequired,
  setCurrentTicket: PropTypes.func.isRequired,
  updateUserFromBo: PropTypes.func.isRequired,
  user: PropTypes.shape({
    phone_number: PropTypes.string,
  }),
};
TicketMini.defaultProps = {
  user: null,
};
export default TicketMini;
