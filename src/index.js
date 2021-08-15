import React from 'react';
import { Grid } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import ReactDOM from 'react-dom'

import theme from './layouts/Theme'
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Transactions from './pages/Transactions';
//import TransactionsViewPDF from './components/TransactionsViewPDF';
import Contacts from './pages/Contacts';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import About from './pages/About'
import Video from './pages/Video'
import Terms from './pages/Terms'
import Register from './pages/Register'

import ContactsContextProvider from './contexts/ContactsContext'
import BalanceContextProvider from './contexts/BalanceContext'
import TransactionsContextProvider from './contexts/TransactionsContext'
import AuthContextProvider from './contexts/AuthenticationContext'
import PrivateRoute from './components/PrivateRoute'

const App = () => {

  return (
    <ThemeProvider theme={theme}>
     <AuthContextProvider>
      <BrowserRouter>
        <ContactsContextProvider>
        <BalanceContextProvider>
        <TransactionsContextProvider>
            <Grid container>
              <Grid item xs={12}>
                <Header />
              </Grid>
              <Grid item xs={12}>
                <Switch>

                  {/* private */}                  

                  <PrivateRoute exact path="/transactions/pdf">
                      <Transactions subview="pdf" />  
                  </PrivateRoute>

                  <PrivateRoute exact path="/transactions">
                      <Transactions subview="datagrid" />  
                  </PrivateRoute>

                  <PrivateRoute exact path="/contacts">
                      <Contacts />
                  </PrivateRoute>

                  <PrivateRoute exact path="/profile">
                      <Profile />
                  </PrivateRoute>


                      {/* public - Dashboard Sub Forms */}

                      <PrivateRoute exact path="/airtime/use">
                          <Dashboard subform="use"/>
                      </PrivateRoute>
          
                      <PrivateRoute exact path="/airtime/send">
                          <Dashboard subform="send"/>
                      </PrivateRoute>

                      <PrivateRoute exact path="/airtime/request">
                          <Dashboard subform="request"/>
                      </PrivateRoute>

                      <PrivateRoute exact path="/airtime/buy">
                          <Dashboard subform="buy"/>
                      </PrivateRoute>

                      <PrivateRoute exact path="/airtime">
                          <Dashboard subform="use"/>
                      </PrivateRoute>
                  
                  {/* public */}
                  <Route path="/terms" component={Terms} />
                  <Route path="/video" component={Video} />
                  <Route path="/about" component={About} />
                  <Route path="/signin" component={SignIn} />
                  <Route path="/register" component={Register} />

                  <Redirect from="/" to="/airtime" />
                </Switch>
              </Grid>
              <Grid item xs={12}>
                <Footer />
              </Grid>
            </Grid>
          </TransactionsContextProvider>
          </BalanceContextProvider>
          </ContactsContextProvider>
      </BrowserRouter>
      </AuthContextProvider>
    </ThemeProvider>
    );
  };
  
  ReactDOM.render(<App />, document.getElementById("root"));
