import { connect } from 'react-redux';

import SignUpForm from 'src/components/SignUpForm';
import {
  getNewUser,
  saveUser,
  displayLogin,
  setAvatar,
} from 'src/actions/auth';

const mapStateToProps = (state) => ({
  newUser: {
    firstname: state.auth.firstname,
    lastname: state.auth.lastname,
    password: state.auth.password,
    email: state.auth.email,
    phoneNumber: state.auth.phoneNumber,
    avatar: state.auth.avatar,
    role: state.auth.role,
    favorite: state.auth.favorite,
    restaurantId: state.auth.restaurantId,
  },
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  changeField: (newValue, name) => {
    // console.log(`New value ${newValue} for the field ${name}`);
    dispatch(getNewUser(newValue, name));
  },
  saveNewUser: (newUser) => {
    dispatch(saveUser(newUser));
  },

  displayLogin: () => {
    dispatch(displayLogin());
  },
  setAvatar: (base64) => {
    dispatch(setAvatar(base64));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
