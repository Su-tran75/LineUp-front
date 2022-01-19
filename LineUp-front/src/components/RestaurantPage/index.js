/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Modal from 'src/containers/RestaurantPage/Modal';
import './restaurantPage.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const RestaurantPage = ({ restaurants }) => {
  const classes = useStyles();

  const { id } = useParams();
  const foundResto = restaurants.find((rest) => parseInt(id, 10) === parseInt(rest.id, 10));

  if (!foundResto) {
    return (
      <h1>Resto not found</h1>
    );
  }

  const {
    picture,
    cuisine_type,
    name,
    adress,
    zip,
    city,
    phone_number,
    ticket,
  } = foundResto;

  return (
    <div className="restaurant-page">
      <div className="restaurant-infos">
        <img
          className="restaurant-picture"
          alt=""
          src={picture}
        />
        <div className="restaurant-type-food">
          <span>
            {cuisine_type.name}
          </span>
        </div>
      </div>
      <div className="restaurant-statut">
        <h1 className="restaurant-name">
          {name}
        </h1>
        <div className="restaurant-adress">
          {adress} {zip} {city}
        </div>
        <div className="restaurant-phone">
          {phone_number}
        </div>
        <div className="restaurant-queue">
          Tickets en attente : {(ticket.filter((item) => item.status === 1).length)}
        </div>
      </div>
      <div className={classes.root}>
        <Modal />
      </div>
    </div>

  );
};

RestaurantPage.propTypes = {
  restaurants: PropTypes.array.isRequired,
};

export default RestaurantPage;
