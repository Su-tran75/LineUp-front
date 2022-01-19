/* eslint-disable react/jsx-indent */
/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import './login.scss';
import TextField from '@material-ui/core/TextField';
import Avatar from 'src/assets/avatar.svg';
import { withStyles } from '@material-ui/core/styles';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';

const CssTextField = withStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'wheat',
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

const Login = ({
  handleLogin,
  changeField,
  email,
  password,
  displaySignUp,
  displaySignUpResto,
}) => {
  const handleChange = (input) => (e) => {
    changeField(e.target.value, [input]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
         <div className="login">
            <div className="login__header">
               <p className="login__headerTitle"> Se connecter</p>
            </div>

            <form className="login__form" onSubmit={handleSubmit}>
               <CssTextField
                 className="input"
                 label="Email"
                 type="mail"
                 variant="outlined"
                 onChange={handleChange('email')}
               />
               <CssTextField
                 className="input"
                 label="Password"
                 type="password"
                 variant="outlined"
                 onChange={handleChange('password')}
               />

                    <button className="button" type="submit">
                    <p>Connexion</p>
                    </button>

            </form>
              <a className="link" onClick={() => displaySignUp()}>
                <div className="login__toSignUp link-border">
                    <p> Pas de compte ? </p>
                    <p> S'inscrire ici</p>
                </div>
              </a>
              <a className="link" onClick={() => displaySignUpResto()}>
                <div className="login__toResto link-border">
                  <p> Vous etes restaurateur ?  </p>
                  <p> S'inscrire ici</p>
                </div>
              </a>
         </div>
  );
};

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  displaySignUp: PropTypes.func.isRequired,
  displaySignUpResto: PropTypes.func.isRequired,
};

export default Login;
