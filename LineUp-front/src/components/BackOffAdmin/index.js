/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import AddRestoForm from 'src/containers/AddRestoForm';
import { withStyles } from '@material-ui/core/styles';
import ResultBackAdmin from './ResultsBackAdmin';
import './backOffAdmin.scss';

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
        fill: 'wheat',
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

const BackOffAdmin = ({
  searchbarContent,
  changeField,
  sendSearchSubmit,
  isOpenFormDisplay,
  toggleFormDisplay,
  restaurantsArr,
  changeSearchbarField,
  // ResultsBackAdmin component state
  restaurantsResult,
  restaurantCounter,
  usersResult,
  userCounter,
  deleteUser,
  deleteRestaurant,
  setIdToDelete,
}) => {
  // Toggle button classname when a user click it | Inverse la classe
  const cssClassButton = classNames('addform-toggle', { 'addform-toggle--open': isOpenFormDisplay });
  const cssClassForm = classNames('back-admin-addform-container', { 'back-admin-addform-container--open': isOpenFormDisplay });
  const cssClassDiv = classNames('back-admin-results-container', { 'back-admin-results-container--close': isOpenFormDisplay });

  // Submission form's process | Gère la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    sendSearchSubmit();
  };

  // Map on array we want to could have a preview on searchbar
  const options = restaurantsArr.map((option) => {
    // Put string's first letter to upper case cause it's by what restaurant name begin
    const firstLetter = option.name[0].toUpperCase();
    // Return an array which contain the first character in upper case and the complete string
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  return (
    <div className="back-admin-page-container">
      <h1 className="back-admin-title">
        BACK OFFICE ADMINISTRATEUR
      </h1>
      <div className="back-admin-top-container">
        <button
            type="button"
            className={cssClassButton}
            onClick={toggleFormDisplay}
        >
          +
        </button>
        <form className="back-admin-search-form" onSubmit={handleSubmit}>
          <Autocomplete
            id="grouped-demo"
            onChange={changeSearchbarField}
            options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
            groupBy={(option) => option.firstLetter}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <CssTextField
                {...params}
                label="Rechercher un restaurant ou un utilisateur"
                variant="outlined"
                onChange={changeField}
                name="searchbarContent"
                value={searchbarContent}
              />
            )}
          />
        </form>
      </div>
      <div className={cssClassDiv}>
        <ResultBackAdmin
          restaurantsResult={restaurantsResult}
          usersResult={usersResult}
          restaurantCounter={restaurantCounter}
          userCounter={userCounter}
          deleteRestaurant={deleteRestaurant}
          deleteUser={deleteUser}
          setIdToDelete={setIdToDelete}
        />
      </div>
      <div className={cssClassForm}>
        <AddRestoForm />
      </div>
    </div>
  );
};

BackOffAdmin.propTypes = {
  deleteRestaurant: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  setIdToDelete: PropTypes.func.isRequired,
  userCounter: PropTypes.number.isRequired,
  restaurantCounter: PropTypes.number.isRequired,
  restaurantsResult: PropTypes.array.isRequired,
  usersResult: PropTypes.array.isRequired,
  changeField: PropTypes.func.isRequired,
  changeSearchbarField: PropTypes.func.isRequired,
  searchbarContent: PropTypes.string.isRequired,
  sendSearchSubmit: PropTypes.func.isRequired,
  isOpenFormDisplay: PropTypes.bool.isRequired,
  toggleFormDisplay: PropTypes.func.isRequired,
  restaurantsArr: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default BackOffAdmin;
