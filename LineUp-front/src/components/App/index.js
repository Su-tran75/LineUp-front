/* eslint-disable no-nested-ternary */
/* eslint-disable linebreak-style */
// == Import npm
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router, Redirect, Route, Switch,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Nav from 'src/components/Nav';
import Home from 'src/containers/Home';
import BackOffAdmin from 'src/containers/BackOffAdmin';
import BackOffResto from 'src/containers/BackOffResto';
import Connexion from 'src/containers/Connexion';
import RestaurantPage from 'src/components/RestaurantPage';
// import RestaurantProfile from 'src/components/RestaurantProfile';
import TicketPage from 'src/containers/TicketPage';
import Profile from 'src/containers/Profile';
import TermsOfPolicy from 'src/components/TermsOfPolicy';
import LegalMentions from 'src/components/LegalMentions';
import About from 'src/components/About';
import NoMatch from 'src/components/404';

// == Import
import './styles.scss';
import PrivateRoute from 'src/containers/PrivateRoute';
import PrivateRouteResto from 'src/containers/PrivateRouteResto';
import PrivateRouteAdmin from 'src/containers/PrivateRouteAdmin';

// == Composant
const App = ({
  isLogged, restaurants, role, setToken, avatar,
}) => {
  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, []);
  return (
    <Router>
      <div className="app-container">
        <div className="nav-container">
          <Nav
            isLogged={isLogged}
            role={role}
            avatar={avatar}
          />
        </div>
        <div className="main-content-container">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/ticket">
              <TicketPage />
            </Route>
            <Route path="/cgu">
              <TermsOfPolicy />
            </Route>
            <Route path="/mentions-legales">
              <LegalMentions />
            </Route>
            <Route path="/a-propos">
              <About />
            </Route>
            <Route path="/:id/:name" exact>
              <RestaurantPage restaurants={restaurants} />
            </Route>
            <PrivateRouteResto path="/back-office">
              <BackOffResto />
            </PrivateRouteResto>
            <PrivateRouteAdmin path="/back-admin">
              <BackOffAdmin />
            </PrivateRouteAdmin>

            <PrivateRoute path="/profile" >
              <Profile />
            </PrivateRoute>
            <Route path="/login">
              <Connexion
                isLogged={isLogged}
              />
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
};
App.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  role: PropTypes.array,
  avatar: PropTypes.string,
  setToken: PropTypes.func.isRequired,
};

App.defaultProps = {
  role: [],
  avatar: '',
};

// == Export
export default App;
