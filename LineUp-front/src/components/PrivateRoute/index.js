import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

function PrivateRoute(props) {
  const {
    children, isLogged, role, redirectTo, ...restProps
  } = props;

  return (
    <Route {...restProps}>
      {isLogged ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}

PrivateRoute.defaultProps = {
  redirectTo: '/login',
};
export default PrivateRoute;
