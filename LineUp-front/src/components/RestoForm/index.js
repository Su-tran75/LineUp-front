/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import { withStyles } from '@material-ui/core/styles';

import './restoform.scss';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'wheat',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'wheat',
    },
    '& .MuiOutlinedInput-root': {
      backgroundColor: 'hsla(40, 11%, 11%, 0.878)',

      '& svg': {
        fill : 'wheat'
      },

      '& fieldset': {
        borderColor: 'wheat',
      },
      '& input': {

        color: 'wheat',
      },
      '&:hover fieldset': {
        borderColor: 'orange',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'orange',
      },
    },
  },
})(TextField);

const RestoForm = ({
  firstname,
  lastname,
  email,
  phoneNumber,
  city,
  postalCode,
  adress,
  restaurantName,
  cuisineTypeId,
  siret,
  tradeName,
  isOpenSelect,
  changeField,
  sendEmailToAdmin,
  displayLogin,
  setOpenSelect,
}) => {
  // Submission form's process | Gère la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    sendEmailToAdmin();
  };

  return (
    <div className="subscribe-resto-container">
      <a onClick={displayLogin} className="link">
        <KeyboardReturnIcon style={{ fontSize: 50 }} />
      </a>
      <h1 className="add-resto-title">
        Faire une demande de partenariat
      </h1>
      <form className="add-resto-form" onSubmit={handleSubmit}>
        <div className="top-fieldset">
          <h2 className="top-fieldset-legend">Vos informations</h2>
          <CssTextField
            variant="outlined"
            label="Prénom"
            value={firstname}
            name="firstname"
            type="text"
            onChange={changeField}
            required
          />
          <CssTextField
            variant="outlined"
            label="Nom de famille"
            value={lastname}
            name="lastname"
            type="text"
            onChange={changeField}
            required
          />
          <CssTextField
            variant="outlined"
            label="Adresse e-mail"
            value={email}
            name="email"
            type="email"
            onChange={changeField}
            required
          />
        </div>
        <div className="bottom-fieldset">
          <h2>Votre restaurant</h2>
          <CssTextField
            variant="outlined"
            label="Nom du restaurant"
            value={restaurantName}
            name="restaurantName"
            type="text"
            onChange={changeField}
            required
          />
          <CssTextField
            variant="outlined"
            label="Numéro de téléphone"
            value={phoneNumber}
            name="phoneNumber"
            type="number"
            onChange={changeField}
            required
          />
          <CssTextField
            variant="outlined"
            label="Adresse du restaurant"
            value={adress}
            name="adress"
            type="text"
            onChange={changeField}
            required
          />
          <CssTextField
            variant="outlined"
            label="Code Postal"
            value={postalCode}
            name="postalCode"
            type="number"
            onChange={changeField}
            required
          />
          <CssTextField
            variant="outlined"
            label="Ville"
            value={city}
            name="city"
            type="text"
            onChange={changeField}
            required
          />
          <FormControl fullWidth>

            <CssTextField
              label="Choisir un type de cuisine"
              select
              variant="outlined"
              labelId="cusine-type-label"
              id="demo-simple-select-required"
              value={cuisineTypeId}
              onChange={changeField}
              name="cuisineTypeId"
              open={isOpenSelect}
              onOpen={setOpenSelect}
              onClose={setOpenSelect}
            >
              <MenuItem value="">
                <em>Choisir un type de cuisine</em>
              </MenuItem>
              <MenuItem value={1}>Francais</MenuItem>
              <MenuItem value={2}>Japonais</MenuItem>
              <MenuItem value={3}>Italien</MenuItem>
              <MenuItem value={4}>Chinois</MenuItem>
              <MenuItem value={5}>Indien</MenuItem>
              <MenuItem value={7}>Coréen</MenuItem>
              <MenuItem value={8}>Mexicain</MenuItem>
              <MenuItem value={9}>Thaï</MenuItem>
              <MenuItem value={10}>Portugais</MenuItem>
              <MenuItem value={11}>Turc</MenuItem>
              <MenuItem value={12}>Libanais</MenuItem>
            </CssTextField>
          </FormControl>
          <CssTextField
            variant="outlined"
            label="Numéro de siret"
            value={siret}
            name="siret"
            type="text"
            onChange={changeField}
            required
          />
          <CssTextField
            variant="outlined"
            label="Raison Sociale"
            value={tradeName}
            name="tradeName"
            type="text"
            onChange={changeField}
            required
          />
          <button className="random-password-button" type="submit">
            Envoyer ma demande de partenariat
          </button>
        </div>
      </form>
    </div>
  );
};

RestoForm.propTypes = {
  email: PropTypes.string.isRequired,
  restaurantName: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  postalCode: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  tradeName: PropTypes.string.isRequired,
  cuisineTypeId: PropTypes.number,
  siret: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  sendEmailToAdmin: PropTypes.func.isRequired,
  displayLogin: PropTypes.func.isRequired,
  setOpenSelect: PropTypes.func.isRequired,
  isOpenSelect: PropTypes.bool.isRequired,
};

RestoForm.defaultProps = {
  cuisineTypeId: '',
};

export default RestoForm;
