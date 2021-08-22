import ReactDOM from "react-dom";
import { Grid } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { ConfirmProvider } from "material-ui-confirm";

// Theme
import theme from "./components/Theme";

// Layout
import HeaderLayout from "./components/HeaderLayout";
import FooterLayout from "./components/FooterLayout";

// Pages
import Transactions from "./components/PageTransactions";
import Contacts from "./components/PageContacts";
import Dashboard from "./components/PageDashboard";
import Profile from "./components/PageProfile";
import SignIn from "./components/PageSignIn";
import About from "./components/PageAbout";
import Video from "./components/PageVideo";
import Terms from "./components/PageTerms";
import Register from "./components/PageRegister";
// Contexts
import ContactsContextProvider from "./contexts/ContactsContext";
import BalanceContextProvider from "./contexts/BalanceContext";
import TransactionsContextProvider from "./contexts/TransactionsContext";
import AuthContextProvider from "./contexts/AuthenticationContext";
import NotificationsContextProvider from "./contexts/NotificationsContext";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ConfirmProvider>
        <AuthContextProvider>
          <BrowserRouter>
            <ContactsContextProvider>
              <BalanceContextProvider>
                <TransactionsContextProvider>
                  <NotificationsContextProvider>
                    <Grid container>
                      <Grid item xs={12}>
                        <HeaderLayout />
                      </Grid>
                      <Grid item xs={12}>
                        <Switch>
                          {/* private */}

                          {/* transactions */}

                          <PrivateRoute exact path="/transactions/pdf">
                            <Transactions subview="pdf" />
                          </PrivateRoute>

                          <PrivateRoute exact path="/transactions/:id/pdf">
                            <Transactions subview="pdf" />
                          </PrivateRoute>

                          <PrivateRoute exact path="/transactions">
                            <Transactions subview="datagrid" />
                          </PrivateRoute>

                          <PrivateRoute exact path="/transactions/:id">
                            <Transactions subview="detail" />
                          </PrivateRoute>

                          <PrivateRoute exact path="/contacts">
                            <Contacts />
                          </PrivateRoute>

                          <PrivateRoute exact path="/profile">
                            <Profile />
                          </PrivateRoute>

                          {/* dashboard sub forms */}

                          <PrivateRoute exact path="/airtime/use">
                            <Dashboard subform="use" />
                          </PrivateRoute>

                          <PrivateRoute exact path="/airtime/send">
                            <Dashboard subform="send" />
                          </PrivateRoute>

                          <PrivateRoute exact path="/airtime/request">
                            <Dashboard subform="request" />
                          </PrivateRoute>

                          <PrivateRoute exact path="/airtime/buy">
                            <Dashboard subform="buy" />
                          </PrivateRoute>

                          <PrivateRoute path="/airtime">
                            <Dashboard />
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
                        <FooterLayout />
                      </Grid>
                    </Grid>
                  </NotificationsContextProvider>
                </TransactionsContextProvider>
              </BalanceContextProvider>
            </ContactsContextProvider>
          </BrowserRouter>
        </AuthContextProvider>
      </ConfirmProvider>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
