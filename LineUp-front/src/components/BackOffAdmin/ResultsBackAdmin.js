import React from 'react';
import PropTypes from 'prop-types';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import './resultsBackAdmin.scss';

const ResultBackAdmin = ({
  restaurantsResult,
  restaurantCounter,
  usersResult,
  userCounter,
  deleteRestaurant,
  deleteUser,
  setIdToDelete,
}) => {
  const handleDeleteRestaurant = (e) => {
    // 1. Put the desired item id in the state to access it in middleware
    setIdToDelete(e);
    // 2. Send a delete axios request in backOffRestoMiddleware
    deleteRestaurant();
  };
  const handleDeleteUser = (e) => {
    // 1. Put the desired item id in the state to access it in middleware
    setIdToDelete(e);
    // 2. Send a delete axios request in backOffRestoMiddleware
    deleteUser();
  };

  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className="">{restaurantCounter} Restaurants</Typography>
          <Typography className="">Ouvrir</Typography>
        </AccordionSummary>
        <AccordionDetails fullwidth={true.toString()}>
          <div className="boa-restaurant-wrapper">
            {restaurantsResult.length !== 0 && restaurantsResult.map((restaurant) => (
              <div key={restaurant.id} className="restaurant-card">
                <div className="restaurant-name">
                  {restaurant.name}
                </div>
                <div className="restaurant-adress">
                  {restaurant.adress}
                </div>
                <div className="restaurant-zip">
                  {restaurant.zip} {restaurant.city}
                </div>
                <div className="restaurant-phone">
                  {restaurant.phone_number}
                </div>
                <div className="restaurant-type">
                  {restaurant.cuisine_type.name}
                </div>
                <div className="restaurant-siret">
                  RCS: {restaurant.trade_name} {restaurant.siret}
                </div>
                <div className="restaurant-picture" style={{ backgroundImage: `url(${restaurant.picture})` }} />
                <button
                  name={restaurant.id}
                  onClick={handleDeleteRestaurant}
                  className="restaurant-btn"
                  type="button"
                >
                  <DeleteForeverIcon />
                </button>
              </div>
            ))}
          </div>
          {restaurantsResult.length === 0 && 'La recherche n\'a renvoyé aucun restaurant.'}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className="">{userCounter} Utilisateurs</Typography>
          <Typography className="">Ouvrir</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="boa-user-wrapper">
            {usersResult.length !== 0 && usersResult.map((user) => (
              <div key={user.id} className="user-card">
                {user.avatar !== null && (
                  <img
                    className="user-avatar"
                    alt="avatar de l'utilisateur"
                    src={user.avatar}
                  />
                )}
                <div className="user-name">
                  <span>{user.lastname}</span> {user.firstname}
                </div>
                <div className="user-phone">
                  {user.phone_number}
                </div>
                <div className="user-mail">
                  {user.email}
                </div>
                <button
                  name={user.id}
                  className="user-btn"
                  type="button"
                  onClick={handleDeleteUser}
                >
                  <DeleteForeverIcon />
                </button>
              </div>
            ))}
          </div>
          {usersResult.length === 0 && 'La recherche n\'a renvoyé aucun utilisateur.'}
        </AccordionDetails>
      </Accordion>
    </>
  );
};
ResultBackAdmin.propTypes = {
  deleteRestaurant: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  setIdToDelete: PropTypes.func.isRequired,
  restaurantCounter: PropTypes.number.isRequired,
  userCounter: PropTypes.number.isRequired,
  usersResult: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      lastname: PropTypes.string,
      firstname: PropTypes.string,
      phone_number: PropTypes.string,
      email: PropTypes.string,
    }),
  ).isRequired,
  restaurantsResult: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      adress: PropTypes.string,
      siret: PropTypes.string,
      zip: PropTypes.string,
      phone_number: PropTypes.string,
      cuisine_type: PropTypes.array,
      trade_name: PropTypes.string,
      city: PropTypes.string,
    }),
  ).isRequired,
};

export default ResultBackAdmin;
