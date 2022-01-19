/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';

// == Composant
const CardRestaurant = ({
  name,
  cuisine_type,
  picture,
  ticket,
}) => (
  <div
    className="card"
    style={{ backgroundImage: `url(${picture})` }}
  >
    <div className="card-info">
      <div className="card-info-restaurant-name">
        <div className="name">
          {name}
        </div>
        <div className="type">
          {cuisine_type.name}
        </div>
      </div>
      <div className="card-info-restaurant-queue">
        <ConfirmationNumberIcon />
        <span>{(ticket.filter((item) => item.status === 1).length)}</span>
      </div>

    </div>
  </div>
);

CardRestaurant.propTypes = {
  name: PropTypes.string.isRequired,
  cuisine_type: PropTypes.object,
  picture: PropTypes.string.isRequired,
  ticket: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      status: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

CardRestaurant.defaultProps = {
  cuisine_type: '',
};

// == Export
export default CardRestaurant;
