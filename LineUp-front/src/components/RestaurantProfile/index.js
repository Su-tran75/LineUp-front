import React from 'react';
import PropTypes from 'prop-types';
import './restaurantProfile.scss';
import { restaurants } from 'src/assets/data';

// console.log(restaurants);

const RestaurantProfile = ({
  lastName,
  firstName,
  restaurantName,
  email,
  address,
  zipCode,
  city,
  phoneNumber,
  foodType,
  tradeName,
  siret,
}) => (
  <div className="restaurant-infos">
    <title className="restaurant-title">Votre profile restaurant</title>
    <div className="restaurant-info">
      <h2 className="restaurant-user-lastname">
        Nom:
      </h2>
      <h3>
        Nam quis nulla. Integer malesuada. {lastName}
      </h3>
    </div>
    <div className="restaurant-info">
      <h2 className="restaurant-user-firstname">
        Prénom:
      </h2>
      <h3>
        Nam quis nulla. Integer malesuada. {firstName}
      </h3>
    </div>
    <div className="restaurant-info">
      <h2 className="restaurant-name">
        Nom du restaurant:
      </h2>
      <h3>
        Nam quis nulla. Integer malesuada. {restaurantName}
      </h3>
    </div>
    <div className="restaurant-info">
      <h2 className="restaurant-email">
        Email:
      </h2>
      <h3>
        Nam quis nulla. Integer malesuada. {email}
      </h3>
    </div>
    <div className="restaurant-info">
      <h2 className="restaurant-address">
        Adresse:
      </h2>
      <h3>
        Nam quis nulla. Integer malesuada. {address}
      </h3>
    </div>
    <div className="restaurant-info">
      <h2 className="restaurant-zipCode">
        Code postal:
      </h2>
      <h3>
        Nam quis nulla. Integer malesuada. {zipCode}
      </h3>
    </div>
    <div className="restaurant-info">
      <h2 className="restaurant-city">
        Ville:
      </h2>
      <h3>
        Nam quis nulla. Integer malesuada. {city}
      </h3>
    </div>
    <div className="restaurant-info">
      <h2 className="restaurant-phone-number">
        Téléphone:
      </h2>
      <h3>
        Nam quis nulla. Integer malesuada. {phoneNumber}
      </h3>
    </div>
    <div className="restaurant-info">
      <h2 className="restaurant-food-type">
        Type de cuisine:
      </h2>
      <h3>
        Asiatique {foodType}
      </h3>
    </div>
    <div className="restaurant-info">
      <h2 className="restaurant-trade-name">
        Raison sociale:
      </h2>
      <h3>
        Nam quis nulla. Integer malesuada. {tradeName}
      </h3>
    </div>
    <div className="restaurant-info">
      <h2 className="restaurant-siret">
        SIRET:
      </h2>
      <h3>
        Nam quis nulla. Integer malesuada. {siret}
      </h3>
    </div>
  </div>
);

RestaurantProfile.propTypes = {
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  restaurantName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  zipCode: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  phoneNumber: PropTypes.number.isRequired,
  foodType: PropTypes.string.isRequired,
  tradeName: PropTypes.string.isRequired,
  siret: PropTypes.number.isRequired,
};

export default RestaurantProfile;
