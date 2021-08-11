import React, { useContext, useState }  from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Card, CardHeader, CardContent } from '@material-ui/core';

import { Redirect } from "react-router-dom";
//import { AuthContext } from '../auth/authContext';


const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignInPage = props => {
  //const context = useContext(AuthContext)
  const [telephoneNumber, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const classes = useStyles();

  const login = () => {
    //context.authenticate(telephoneNumber, password);
  };

  // Set 'from' to path where browser is redirected after a successful login.
  // Either / or the protected path user tried to access.
  const { from } = props.location.state || { from: { pathname: "/" } };

  //if (context.isAuthenticated === true) 
        {
            return <Redirect to={from} />;
        }

  return (
    <Container component="main" maxWidth="xs">
      <Card>
      <CardHeader title='Sign In'></CardHeader>
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
            onChange={e => {setUserName(e.target.value);}}
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
            onChange={e => {setPassword(e.target.value);}}
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
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
        </CardContent>
      </Card>
    </Container>
  );
}

export default SignInPage;