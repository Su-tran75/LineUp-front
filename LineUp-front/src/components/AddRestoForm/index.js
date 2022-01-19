import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import FileBase64 from 'react-file-base64';
import { withStyles } from '@material-ui/core/styles';
// Call when click on random password button
import { generatePassword } from 'src/utils';

import './addRestoForm.scss';

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

const AddRestoForm = ({
  firstname,
  lastname,
  email,
  password,
  phoneNumber,
  city,
  postalCode,
  adress,
  restaurantName,
  role,
  cuisineTypeId,
  siret,
  tradeName,
  isOpenSelect,
  // Functions
  changeField,
  addRestaurant,
  setOpenSelect,
  changePasswordField,
  setFilePicture,

}) => {
  // Submission form's process | Gère la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    // Send an action to backOffAdminMiddleware
    addRestaurant();
  };

  // Transform a given file into base 64
  const getFile = (file) => {
    setFilePicture(file.base64);
  };
  return (
    <div className="add-resto-container">
      <h1 className="add-resto-title">
        Ajouter un nouveau partenaire
      </h1>
      <form className="add-resto-form" onSubmit={handleSubmit}>
        <div className="top-fieldset">
          <h2 className="top-fieldset-legend">Informations de l'utilisateur</h2>
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
          <CssTextField
            variant="outlined"
            label="Role"
            value={role}
            name="role"
            type="text"
            onChange={changeField}
            required
          />
          <CssTextField
            variant="outlined"
            label="Mot de passe"
            value={password}
            name="password"
            type="password"
            onChange={changeField}
            required
          />
          <button
            className="random-password-button"
            type="button"
            onClick={changePasswordField}
            value={generatePassword()}
          >
            <AutorenewIcon />
          </button>
        </div>
        <div className="bottom-fieldset">
          <h2>Informations du restaurant</h2>
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
            type="string"
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
          <FormControl fullwidth={true.toString()}>

            <CssTextField
              variant="outlined"
              label="Type de cuisine"
              select
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
          <FileBase64 multiple={false} onDone={getFile} id="file" />
          <button className="submit-button" type="submit">
            AJOUTER UN PARTENAIRE
          </button>
        </div>
      </form>
    </div>
  );
};

AddRestoForm.propTypes = {
  email: PropTypes.string.isRequired,
  restaurantName: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  postalCode: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  tradeName: PropTypes.string.isRequired,
  setFilePicture: PropTypes.func.isRequired,
  cuisineTypeId: PropTypes.number.isRequired,
  siret: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  addRestaurant: PropTypes.func.isRequired,
  isOpenSelect: PropTypes.bool.isRequired,
  setOpenSelect: PropTypes.func.isRequired,
  changePasswordField: PropTypes.func.isRequired,
};

export default AddRestoForm;
