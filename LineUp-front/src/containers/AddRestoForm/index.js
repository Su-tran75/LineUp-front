import { connect } from 'react-redux';

// on importe le composant de présentation
import AddRestoForm from 'src/components/AddRestoForm';

import {
  changeField,
  addRestaurant,
  setOpenSelect,
  changePasswordField,
  setFilePicture,
} from 'src/actions/backOffAdmin';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  email: state.backOffAdmin.email,
  password: state.backOffAdmin.password,
  firstname: state.backOffAdmin.firstname,
  lastname: state.backOffAdmin.lastname,
  phoneNumber: state.backOffAdmin.phoneNumber,
  city: state.backOffAdmin.city,
  postalCode: state.backOffAdmin.postalCode,
  adress: state.backOffAdmin.adress,
  restaurantName: state.backOffAdmin.restaurantName,
  role: state.backOffAdmin.role,
  cuisineTypeId: state.backOffAdmin.cuisineTypeId,
  siret: state.backOffAdmin.siret,
  filePicture: state.backOffAdmin.filePicture,
  tradeName: state.backOffAdmin.tradeName,
  isOpenSelect: state.backOffAdmin.isOpenSelect,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue) => {
    dispatch(changeField(newValue.target.value, newValue.target.name));
  },
  addRestaurant: () => {
    dispatch(addRestaurant());
  },
  setOpenSelect: () => {
    dispatch(setOpenSelect());
  },
  changePasswordField: (newValue) => {
    dispatch(changePasswordField(newValue.currentTarget.value));
  },
  setFilePicture: (newValue) => {
    dispatch(setFilePicture(newValue));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(AddRestoForm);
