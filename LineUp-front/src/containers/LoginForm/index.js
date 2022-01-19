import { connect } from 'react-redux';

// on importe le composant de présentation
import LoginForm from 'src/components/LoginForm';

import {
  logIn,
  getNewUser,
  displaySignUp,
  displaySignUpResto,
} from 'src/actions/auth';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  email: state.auth.email,
  password: state.auth.password,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    // console.log(`New value ${newValue} for the field ${name}`);
    dispatch(getNewUser(newValue, name));
  },
  handleLogin: () => {
    dispatch(logIn());
  },
  displaySignUp: () => {
    dispatch(displaySignUp());
  },
  displaySignUpResto: () => {
    dispatch(displaySignUpResto());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
