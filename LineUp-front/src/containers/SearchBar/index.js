import { connect } from 'react-redux';

// on importe le composant de présentation
import SearchBar from 'src/components/SearchBar';

import { changeField, sendSearchFromHome, changeSearchbarField } from 'src/actions/restaurant';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  restaurantsArr: state.restaurant.restaurantsArr,
  searchbarContent: state.restaurant.searchbarContent,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue) => {
    dispatch(changeField(newValue.target.value, newValue.target.name));
  },
  sendSearchFromHome: () => {
    dispatch(sendSearchFromHome());
  },
  changeSearchbarField: (newValue) => {
    dispatch(changeSearchbarField(newValue.target.innerText));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
