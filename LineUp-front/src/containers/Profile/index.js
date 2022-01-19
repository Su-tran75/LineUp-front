import { connect } from 'react-redux';

import Profile from 'src/components/Profile';
import { removeToken, deleteUserFromeUser  } from 'src/actions/auth';
import { toggleIsOpenModal, changeField, changePasswordInDb } from 'src/actions/profile';

const mapStateToProps = (state) => ({

  // User infos
  firstname: state.profile.user.firstname,
  lastname: state.profile.user.lastname,
  email: state.profile.user.email,
  phoneNumber: state.profile.user.phoneNumber,
  avatar: state.profile.user.avatar,
  role: state.profile.user.roles,
  // Restaurant infos
  restoName: state.profile.restaurant.name,
  restoAdress: state.profile.restaurant.adress,
  restoZip: state.profile.restaurant.zip,
  restoCity: state.profile.restaurant.city,
  restoPhoneNumber: state.profile.restaurant.phone_number,
  restoTradeName: state.profile.restaurant.trade_name,
  restoSiret: state.profile.restaurant.siret,
  // Change password Modal infos
  oldPassword: state.profile.oldPassword,
  newPassword: state.profile.newPassword,
  newPasswordVerif: state.profile.newPasswordVerif,
  isOpenModal: state.profile.isOpenModal,
});

const mapDispatchToProps = (dispatch) => ({

  handleLogout: () => {
    dispatch(removeToken());
  },
  toggleIsOpenModal: () => {
    dispatch(toggleIsOpenModal());
  },
  changePasswordInDb: () => {
    dispatch(changePasswordInDb());
  },
  changeField: (newValue) => {
    dispatch(changeField(newValue.target.value, newValue.target.name));
  },
  deleteUserFromeUser: () => {
    dispatch(deleteUserFromeUser());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
