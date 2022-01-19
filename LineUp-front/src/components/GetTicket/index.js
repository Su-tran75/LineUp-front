import React from 'react';
import PropTypes from 'prop-types';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';

import './getTicket.scss';

const GetTicket = ({
  nameOnTicket,
  commentOnTicket,
  nbOfGuest,
  changeField,
  incrementGuest,
  decrementGuest,
  sendTicketToDbFromBo,
  loadTickets,
}) => {
  const handleButton = () => {
    if (nbOfGuest > 10) {
      window.alert('Nombre maximum de convives atteints')
    } else {
      return (
        sendTicketToDbFromBo(),
        loadTickets()
      );
    }
  };
  return (
    <div className="get-ticket-component">
      <div className="get-ticket__title">Nouveau Ticket</div>
      <form className="get-ticket__form">
        <div className="get-ticket__name">
          <TextField
            label="Nom"
            value={nameOnTicket}
            name="nameOnTicket"
            type="text"
            onChange={changeField}
            autoComplete="off"
            required
          />
        </div>
        <div className="get-ticket__btn_div">
          <button
            className="get-ticket__btn bottom"
            type="button"
            onClick={decrementGuest}
            name="nbOfGuest"
          >
            <RemoveIcon />
          </button>
          <label htmlFor="guests-input">
            <input
              id="guests-input"
              name="nbOfGuest"
              type="number"
              value={parseInt(nbOfGuest, 10)}
              onChange={changeField}
              required
            />
          </label>
          <button
            className="get-ticket__btn top"
            type="button"
            onClick={incrementGuest}
            name="nbOfGuest"
          >
            <AddIcon />
          </button>
          <button
            className="get-ticket__btn add"
            type="button"
            onClick={handleButton}
          >
            VALIDER
          </button>
        </div>
        <div className="get-ticket__comment">
          <TextField
            label="Commentaire"
            value={commentOnTicket}
            name="commentOnTicket"
            type="text"
            onChange={changeField}
          />
        </div>
      </form>
    </div>
  );
};

GetTicket.propTypes = {
  commentOnTicket: PropTypes.string.isRequired,
  nameOnTicket: PropTypes.string.isRequired,
  nbOfGuest: PropTypes.number.isRequired,
  changeField: PropTypes.func.isRequired,
  incrementGuest: PropTypes.func.isRequired,
  decrementGuest: PropTypes.func.isRequired,
  sendTicketToDbFromBo: PropTypes.func.isRequired,
  loadTickets: PropTypes.func.isRequired,
};
export default GetTicket;
