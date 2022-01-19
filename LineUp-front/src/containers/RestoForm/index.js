import { connect } from 'react-redux';

// on importe le composant de présentation
import RestoForm from 'src/components/RestoForm';

import { changeField, sendEmailToAdmin, setOpenSelect, setFilePicture } from 'src/actions/backOffResto';
import { displayLogin } from 'src/actions/auth';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  firstname: state.backOffResto.firstname,
  lastname: state.backOffResto.lastname,
  email: state.backOffResto.email,
  phoneNumber: state.backOffResto.phoneNumber,
  city: state.backOffResto.city,
  postalCode: state.backOffResto.postalCode,
  adress: state.backOffResto.adress,
  restaurantName: state.backOffResto.restaurantName,
  cuisineTypeId: state.backOffResto.cuisineTypeId,
  siret: state.backOffResto.siret,
  picture: state.backOffResto.picture,
  tradeName: state.backOffResto.tradeName,
  isOpenSelect: state.backOffResto.isOpenSelect,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue) => {
    dispatch(changeField(newValue.target.value, newValue.target.name));
  },
  sendEmailToAdmin: () => {
    dispatch(sendEmailToAdmin());
  },
  displayLogin: () => {
    dispatch(displayLogin());
  },
  setOpenSelect: () => {
    dispatch(setOpenSelect());
  },
  setFilePicture: (file) => {
    dispatch(setFilePicture(file));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(RestoForm);
