import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Dialog, Card, CardHeader, CardContent } from "@material-ui/core";

import { Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/AuthenticationContext";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  backDrop: {
    backdropFilter: "blur(3px)",
    backgroundColor: "rgba(0,0,30,0.4)",
  },
}));

const PageSignInPage = (props) => {
  const context = useContext(AuthContext);
  // eslint-disable-next-line no-empty-pattern
  const {} = context;
  const [telephoneNumber, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const classes = useStyles();

  const login = () => {
    context.authenticate(telephoneNumber, password);
  };

  // Set 'from' to path where browser is redirected after a successful login.
  // Either / or the protected path user tried to access.
  const { from } = props.location.state || { from: { pathname: "/airtime" } };

  if (context.isAuthenticated === true) {
    return <Redirect to={from} />;
  }

  return (
    <Dialog
      open={true}
      BackdropProps={{
        classes: {
          root: classes.backDrop,
        },
      }}
    >
      <Card>
        <CardHeader title="Sign In"></CardHeader>
        <CardContent>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="telephoneNumber"
              label="Telephone Number"
              name="telephoneNumber"
              autoComplete="telephoneNumber"
              autoFocus
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={login}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Dialog>
  );
};

export default PageSignInPage;
