import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { Grid } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import theme from './Theme'
import Header from './Header';
import Footer from './Footer';
import Transactions from '../pages/Transactions';
import Contacts from '../pages/Contacts';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import SignIn from '../pages/SignIn';
//import NotFound from '../pages/NotFound'

import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>     
          <Grid container>
              <Grid item xs={12}>
                <Header />
              </Grid>
              <Grid item xs={12}>
                <Switch>
                  <Route path="/transactions" component={Transactions} />
                  <Route exact path="/beneficiaries" component={Contacts} />
                  <Route exact path="/profile" component={Profile} />
                  <Route path="/airtime" component={Dashboard} />
                  <Route path="/signin" component={SignIn} />
                  {/* <Route component={NotFound} /> */}
                  <Redirect from="/" to="/airtime" />
                </Switch>
              </Grid>
              <Grid item xs={12}>
                <Footer />
              </Grid>
            </Grid>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default withAuthenticator(App);
