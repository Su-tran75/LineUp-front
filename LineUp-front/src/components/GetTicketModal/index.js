import React from 'react';
import PropTypes from 'prop-types';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';

import './getTicketModal.scss';

const GetTicketModal = ({
  changeField,
  comment,
  guest,
  incrementGuest,
  decrementGuest,
  sendTicketToDb,
 
}) => {
  const handleButton = () => {
    if (guest > 10) {
      window.alert('Nombre maximum de convives atteint');
    }
    if (comment.length > 30) {
      window.alert('Nombre maximum de caractères atteint');
    }
    else {
      sendTicketToDb();
    }
  };
  return (
    <div className="get-ticket-component">
      <div className="get-ticket__title">Nouveau Ticket</div>
      <form className="get-ticket__form">
        <div className="get-ticket__btn_div">
          <button
            className="get-ticket__btn bottom"
            type="button"
            onClick={decrementGuest}
            name="guest"
          >
            <RemoveIcon />
          </button>
          <label htmlFor="guests-input">
            <input
              id="guests-input"
              name="guest"
              type="number"
              value={parseInt(guest, 10)}
              onChange={changeField}
              required
            />
          </label>
          <button
            className="get-ticket__btn top"
            type="button"
            onClick={incrementGuest}
            name="guest"
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
            value={comment}
            name="comment"
            type="text"
            onChange={changeField}
          />
        </div>
      </form>
    </div>
  );
}
GetTicketModal.propTypes = {
  comment: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  guest: PropTypes.number.isRequired,
  incrementGuest: PropTypes.func.isRequired,
  decrementGuest: PropTypes.func.isRequired,
  sendTicketToDb: PropTypes.func.isRequired,
};
export default GetTicketModal;
