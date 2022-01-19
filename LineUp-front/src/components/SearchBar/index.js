import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { withStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//       width: '30ch',
//     },
//   },
// }));



const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'wheat',
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


const SearchBar = ({
  restaurantsArr,
  changeField,
  searchbarContent,
  sendSearchFromHome,
  changeSearchbarField,
}) => {
  // Submission form's process | Gère la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    sendSearchFromHome(event.currentTarget.value);
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
            label="Cherchez un restaurant"
            variant="outlined"
            onChange={changeField}
            name="searchbarContent"
            value={searchbarContent}
          />
        )}
      />
    </form>
  );
};

SearchBar.propTypes = {
  changeField: PropTypes.func.isRequired,
  changeSearchbarField: PropTypes.func.isRequired,
  sendSearchFromHome: PropTypes.func.isRequired,
  searchbarContent: PropTypes.string.isRequired,
  restaurantsArr: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default SearchBar;
