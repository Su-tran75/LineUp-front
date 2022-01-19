import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import './infos.scss';

const Infos = ({ isOpenInfosDisplay, toggleInfosDisplay }) => {
  // Toggle button classname when a user click it | Inverse la classe
  const cssClassButton = classNames('infos-menu', { active: isOpenInfosDisplay });
  return (
    <div className="infos-container">
      <div className={cssClassButton}>
        <div className="infos-menu-btn" onClick={toggleInfosDisplay}>
          <div className="row" />
        </div>
        <NavLink to="/cgu">
          <div className="infos-circle infos-circle-1">
            CGU
          </div>
        </NavLink>
        <NavLink to="/mentions-legales">
          <div className="infos-circle infos-circle-2">
            Mentions
            Légales
          </div>
        </NavLink>
        <NavLink to="/a-propos">
          <div className="infos-circle infos-circle-3">
            À
            Propos
          </div>
        </NavLink>
      </div>
    </div>
  );
}

Infos.propTypes = {
  isOpenInfosDisplay: PropTypes.bool.isRequired,
  toggleInfosDisplay: PropTypes.func.isRequired,
};

Infos.propTypes = {
};

export default Infos;
