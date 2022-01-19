import React from 'react';
import PropTypes from 'prop-types';
import './interval.scss';
import RemoveCircleSharpIcon from '@material-ui/icons/RemoveCircleSharp';
import AddCircleSharpIcon from '@material-ui/icons/AddCircleSharp';
import CheckIcon from '@material-ui/icons/Check';

const Interval = ({
  intervalValue,
  sendIntervalToDb,
  incrementInterval,
  decrementInterval,
  changeField,
  nextTicketHour,
}) => {
  // Submission form's process | Gère la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    // Send an action to backOffRestoMiddleware
    sendIntervalToDb();
  };

  return (
    <form className="interval-component" onSubmit={handleSubmit}>
      <div className="interval__top_div">
        <div className="interval__title">Intervalle entre chaque ticket</div>
        <div className="interval__set__time">
          <input
            name="intervalValue"
            type="number"
            value={intervalValue}
            onChange={changeField}
          />
          min
        </div>
        <div className="interval__next">
          <div>Prochain Ticket</div>
          <div className="interval-hour-next">{nextTicketHour} min</div>
        </div>
      </div>
      <div className="interval__bottom_div">
        <button
          name="intervalValue"
          className="interval__btn top"
          type="button"
          onClick={incrementInterval}
        >
          <AddCircleSharpIcon />
        </button>
        <button
          className="interval__btn middle"
          type="button"
          onClick={sendIntervalToDb}
        >
          <CheckIcon />
        </button>
        <button
          name="intervalValue"
          className="interval__btn bottom"
          type="button"
          onClick={decrementInterval}
        >
          <RemoveCircleSharpIcon />
        </button>
      </div>
    </form>
  );
};

Interval.propTypes = {
  changeField: PropTypes.func.isRequired,
  intervalValue: PropTypes.number.isRequired,
  sendIntervalToDb: PropTypes.func.isRequired,
  incrementInterval: PropTypes.func.isRequired,
  decrementInterval: PropTypes.func.isRequired,
  nextTicketHour: PropTypes.number.isRequired,
};

export default Interval;
