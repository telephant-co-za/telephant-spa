import React from 'react';
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
import AuthHeader from "../auth/authHeader";
import AuthProvider from "../auth/authContext";
import PrivateRoute from "../auth/privateRoute";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AuthProvider>
          <AuthHeader />     
            <Grid container>
              <Grid item xs={12}>
                <Header />
              </Grid>
              <Grid item xs={12}>
                <Switch>
                  <Route path="/transactions" component={Transactions} />
                  <Route exact path="/beneficiaries" component={Contacts} />
                  <Route  exact path="/profile" component={Profile} />
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
          </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
