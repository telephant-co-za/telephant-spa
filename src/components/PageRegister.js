import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
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

const PageRegister = (props) => {
  const context = useContext(AuthContext);
  const [telephoneNumber, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const classes = useStyles();

  const signup = () => {
    context.register(telephoneNumber, password);
  };

  // Set 'from' to path where browser is redirected after a successful login.
  const { from } = { from: { pathname: "/airtime" } };

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
        <CardHeader title="Register"></CardHeader>
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
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Confirm Password"
              type="password"
              id="password"
              autoComplete="current-password"
              //onChange={e => {setPassword(e.target.value);}}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={signup}
            >
              Register
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="signin" variant="body2">
                  {"Already have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Dialog>
  );
};

export default PageRegister;
