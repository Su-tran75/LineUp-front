/* eslint-disable no-nested-ternary */
/* eslint-disable linebreak-style */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomeIcon from '@material-ui/icons/Home';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import PersonIcon from '@material-ui/icons/Person';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import logo from 'src/assets/logo.png';

// == Import
import './nav.scss';

// == Composant
const Nav = ({ isLogged, role, avatar }) => (
  <nav className="nav-container">
    <h1 className="nav-title">
      Gagnez du temps avec LineUp !
    </h1>
    <div className="nav-logo">
      <img
        className="nav-logo-img"
        alt="logo"
        src={logo}
      />
    </div>
    <div className="nav-items">
      <NavLink
        className="nav-item"
        activeClassName="nav-item-active"
        to="/"
        exact
      >
        <HomeIcon style={{ fontSize: 60 }} />
      </NavLink>
      {

          isLogged && role[0] === 'ROLE_RESTAURANT' ? (
            <NavLink
              className="nav-item"
              activeClassName="nav-item-active"
              to="/back-office"
            ><DesktopWindowsIcon style={{ fontSize: 60 }} />
            </NavLink>
          )
            : isLogged && role[0] === 'ROLE_ADMIN'
              ? (
                <NavLink
                  className="nav-item"
                  activeClassName="nav-item-active"
                  to="/back-admin"
                ><DesktopWindowsIcon style={{ fontSize: 60 }} />
                </NavLink>
              )
              : (
                <NavLink
                  className="nav-item"
                  activeClassName="nav-item-active"
                  to="/ticket"
                >
                  <ConfirmationNumberIcon style={{ fontSize: 60 }} />
                </NavLink>
              )
      }

      {
        // First ternary check if user is logged to change link
        isLogged ? (
          <NavLink
            className="nav-item"
            activeClassName="nav-item-active"
            to="/profile"
          >
            {/* Second Ternary check if user had an avatar or not */}
            {avatar !== null ? <img alt="" src={avatar} /> : <PersonIcon style={{ fontSize: 60 }} />}
          </NavLink>
        ) : (
          <NavLink
            className="nav-item"
            activeClassName="nav-item-active"
            to="/login"
          >
            <PersonIcon style={{ fontSize: 60 }} />
          </NavLink>
        )
      }
    </div>
  </nav>
);

Nav.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  role: PropTypes.array,
  avatar: PropTypes.string,
};

Nav.defaultProps = {
  role: [],
  avatar: '',
};

// == Export
export default Nav;

// Il faudra aussi utiliser une librairie pour les icones, ici avec 'yarn add @material-ui/icons'
// Verifier que la librairie possède bien les icones à utiliser (home, ticket, profile)

// Ici, il faudra importer { NavLink} ou { Link } from 'react-router-dom' pour chaque lien
// <NavLink
//     className="nav-item"
//     to="/"
//     activeClassName="nav-item-active"
//     exact
//   >
//     Accueil
// </NavLink>
