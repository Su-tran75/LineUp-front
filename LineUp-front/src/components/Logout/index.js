import React from 'react';
import PropTypes from 'prop-types';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import './logout.scss';

const Logout = ({ handleLogout }) => (
  <a className="link-border" type="button" onClick={handleLogout}>
    DECONNEXION
  </a>
);

Logout.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

export default Logout;
