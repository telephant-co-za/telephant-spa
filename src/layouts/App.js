import React from 'react';
import { Grid } from '@material-ui/core';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Header from './Header';
import Footer from './Footer';
import Transactions from '../pages/Transactions';
import Beneficiaries from '../pages/Beneficiaries';
import Dashboard from '../pages/Dashboard';

const App = () => {
  return (
      <BrowserRouter>
        <Grid container>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12}>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/transactions" component={Transactions} />
              <Route exact path="/beneficiaries" component={Beneficiaries} />
              <Redirect from="*" to="/" />
            </Switch>
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </BrowserRouter>
  );
};

export default App;
