import React from 'react';
import { Grid } from '@material-ui/core';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Header from './Header';
import Footer from './Footer';
import Transactions from '../pages/Transactions';
import Beneficiaries from '../pages/Beneficiaries';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

const App = () => {
  return (
      <BrowserRouter>
        <Grid container>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12}>
            <Switch>
              <Route exact path="/transactions" component={Transactions} />
              <Route exact path="/beneficiaries" component={Beneficiaries} />
              <Route exact path="/profile" component={Profile} />
              <Route path="/airtime" component={Dashboard} />
              <Redirect from="/" to="/airtime" />
              <Redirect from="*" to="/airtime" />
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
