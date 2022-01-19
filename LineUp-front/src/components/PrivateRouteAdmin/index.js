import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import NoMatch from 'src/components/404';

function PrivateRouteAdmin(props) {
  const {
    children, isLogged, role, redirectTo, ...restProps
  } = props;

  return (
    <Route {...restProps}>
      {isLogged && role[0] === 'ROLE_ADMIN' ? children : <NoMatch />}

    </Route>
  );
}

// PrivateRouteAdmin.defaultProps = {
//   redirectTo: '/login',
// };
export default PrivateRouteAdmin;
