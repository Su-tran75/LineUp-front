import { connect } from 'react-redux';

// on importe le composant de présentation
import BackOffAdmin from 'src/components/BackOffAdmin';

import {
  toggleFormDisplay,
  changeField,
  sendSearchSubmit,
  changeSearchbarField,
  deleteRestaurant,
  deleteUser,
  setIdToDelete,
} from 'src/actions/backOffAdmin';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  isOpenFormDisplay: state.backOffAdmin.isOpenFormDisplay,
  searchbarContent: state.backOffAdmin.searchbarContent,
  restaurantsResult: state.backOffAdmin.restaurantsResult,
  usersResult: state.backOffAdmin.usersResult,
  userCounter: state.backOffAdmin.userCounter,
  restaurantCounter: state.backOffAdmin.restaurantCounter,
  restaurantsArr: state.restaurant.restaurantsArr,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  toggleFormDisplay: () => {
    dispatch(toggleFormDisplay());
  },
  sendSearchSubmit: () => {
    dispatch(sendSearchSubmit());
  },
  changeField: (newValue) => {
    dispatch(changeField(newValue.currentTarget.value, newValue.currentTarget.name));
  },
  changeSearchbarField: (newValue) => {
    dispatch(changeSearchbarField(newValue.target.innerText));
  },
  deleteRestaurant: () => {
    dispatch(deleteRestaurant());
  },
  deleteUser: () => {
    dispatch(deleteUser());
  },
  setIdToDelete: (e) => {
    dispatch(setIdToDelete(e.currentTarget.name));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(BackOffAdmin);
