/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';

import './connection.scss';
import { Redirect } from 'react-router-dom';
import LoginForm from 'src/containers/LoginForm';
import SignUpForm from 'src/containers/SignUpForm';
import RestoForm from 'src/containers/RestoForm';

const Connexion = ({
  toDisplay, isLogged, role,
}) => (

  <div className="connection-page-container">
    {isLogged && role[0] === 'ROLE_USER' && <Redirect to="/" />}
    {isLogged && role[0] === 'ROLE_ADMIN' && <Redirect to="/back-admin" />}
    {isLogged && role[0] === 'ROLE_RESTAURANT' && <Redirect to="/back-office" /> }

    {
      toDisplay === 2 ? (
        <SignUpForm
          isLogged={isLogged}
        />
      )
        : toDisplay === 3 ? <RestoForm />
          : (
            <LoginForm
              isLogged={isLogged}
            />
          )
    }

  </div>
);

Connexion.propTypes = {
  toDisplay: PropTypes.number.isRequired,
  isLogged: PropTypes.bool.isRequired,
  role: PropTypes.array,
};

Connexion.defaultProps = {
  role: [],
};

export default Connexion;
