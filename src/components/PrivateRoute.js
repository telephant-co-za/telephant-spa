import React, { useContext} from "react";
import { Route, Redirect } from "react-router-dom";
import {AuthContext} from '../contexts/AuthenticationContext'

const PrivateRoute = props => {
  const context = useContext(AuthContext)
  const { isAuthenticated } = context;
  
  // Destructure props from <privateRoute> 
  const { component: Component, ...rest } = props;
  
  return isAuthenticated === true ? (
    <Route {...rest} render={props => <Component {...props} />} />
  ) : (
    <Redirect
      to={{
        pathname: "/about",
        state: { from: props.location }
      }}
    />
  );
};

export default PrivateRoute;