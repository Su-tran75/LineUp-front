import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import NoMatch from 'src/components/404';

function PrivateRouteResto(props) {
  const {
    children, isLogged, role, redirectTo, ...restProps
  } = props;

  return (
    <Route {...restProps}>
      {isLogged && role[0] === 'ROLE_RESTAURANT' ? children : <NoMatch />}

    </Route>
  );
}

PrivateRouteResto.defaultProps = {
  redirectTo: '/login',
};
export default PrivateRouteResto;
