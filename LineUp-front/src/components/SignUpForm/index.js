/* eslint-disable react/no-array-index-key */
/* eslint-disable linebreak-style */
import React from 'react';
import Avatar from 'src/assets/avatar.svg';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import './signupform.scss';
import FileBase64 from 'react-file-base64';
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

const SignUpForm = ({
  changeField,
  saveNewUser,
  newUser,
  displayLogin,
  setAvatar,
}) => {
  const champs = [
    {
      placeholder: 'Nom', value: '', type: 'text', name: 'lastname',
    },
    {
      placeholder: 'Prenom', value: '', type: 'text', name: 'firstname',
    },
    {
      placeholder: 'Mobile', value: '', type: 'text', name: 'phoneNumber',
    },
    {
      placeholder: 'Mail', value: '', type: 'email', name: 'email',
    },
    {
      placeholder: 'PassWord', value: '', type: 'password', name: 'password',
    },
    {
      placeholder: 'Verification PassWord', value: '', type: 'password', name: 'passwordVerif',
    },
  ];

  // Get input changes & put it in the state
  const handleChange = (input) => (e) => {
    changeField(e.target.value, [input]);
  };

  // Transform picture file into base 64 string
  const getFile = (file) => {
    setAvatar(file.base64);
  };

  return (
    <div className="signup">
      <a onClick={displayLogin} className="link">
        <KeyboardReturnIcon style={{ fontSize: 50 }} />
      </a>
      <div className="signup__header">
        <p className="signup__headerTitle"> S'inscrire </p>
      </div>
      <div className="signup__form">

        {champs.map((champ, key) => (
          <CssTextField
            autoComplete="off"
            key={key}
            className="input"
            type={champ.type}
            label={champ.placeholder}
            variant="outlined"
            onChange={handleChange(champ.name)}
            required
          />
        ))}
        <FileBase64 multiple={false} onDone={getFile} id="file" />

        <button type="button" className="button" onClick={() => saveNewUser(newUser)}>
          Créer mon compte
        </button>

      </div>

    </div>
  );
};

SignUpForm.propTypes = {
  changeField: PropTypes.func.isRequired,
  displayLogin: PropTypes.func.isRequired,
  setAvatar: PropTypes.func.isRequired,
  newUser: PropTypes.object.isRequired,
  saveNewUser: PropTypes.func.isRequired,
};

export default SignUpForm;
