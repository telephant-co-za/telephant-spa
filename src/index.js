/* import React from 'react';
import ReactDOM from 'react-dom';
import App from './layouts/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
,document.getElementById('root')
);

import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"; */



//----

import React from 'react';
import { Grid } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import ReactDOM from 'react-dom'

import theme from './layouts/Theme'
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Transactions from './pages/Transactions';
import Contacts from './pages/Contacts';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
//import SignIn from '../pages/SignIn';
//import NotFound from '../pages/NotFound'
//import AuthHeader from "../auth/delete/authHeader";
//import AuthProvider from "../auth/authContext";
import ContactsContextProvider from './contexts/ContactsContext'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ContactsContextProvider>
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
                  {/*<Route path="/signin" component={SignIn} />*/}
                  {/* <Route component={NotFound} /> */}
                  <Redirect from="/" to="/airtime" />
                </Switch>
              </Grid>
              <Grid item xs={12}>
                <Footer />
              </Grid>
            </Grid>
          </ContactsContextProvider>
      </BrowserRouter>
    </ThemeProvider>
    );
  };
  
  ReactDOM.render(<App />, document.getElementById("root"));
