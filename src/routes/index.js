import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
//const Transactions = lazy(() => import('../pages/Transactions'));
//const Beneficiaries = lazy(() => import('../pages/Beneficiaries'));

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/beneficiaries" component={Beneficiaries} />
        <Route exact path="/transactions" component={Transactions} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;



//<Route component={_ => <ErrorPage status={404} message="Page not found." />} />
//
//