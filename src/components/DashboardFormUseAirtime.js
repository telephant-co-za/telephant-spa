import React from "react";
import {
  CardHeader,
  CardContent,
  Card,
  Box,
  InputLabel,
  FormLabel,
  CardActions,
  Button,
  InputAdornment,
  Input,
  Typography,
} from "@material-ui/core";
import { useContext } from "react";
import { BalanceContext } from "../contexts/BalanceContext";
import { AuthContext } from "../contexts/AuthenticationContext";
import { formatZAR } from "../functions/Formatting";
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import MuiAlert from "@material-ui/lab/Alert";
import { apiUseAirtime } from "../api/api";
import Snackbar from "@material-ui/core/Snackbar";
import { makeStyles } from "@material-ui/core/styles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  submit: {
    marginRight: theme.spacing(2),
  },
  snack: {
    width: "50%",
    "& > * ": {
      width: "100%",
    },
  },
}));

export default function DashboardFormUseAirtime() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const handleSnackClose = (event) => {
    setOpen(false);
    //history.push("/airtime/use");
  };
  const context = useContext(BalanceContext);
  const { balance, updateBalance } = context;
  const context3 = useContext(AuthContext);
  const { refresh } = context3;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setOpen(true);
    apiUseAirtime({ ...data });
    updateBalance(data.amount);
    refresh();
  };

  return (
    <Card style={{ height: "100%" }}>
      <CardHeader title="Use Airtime" />
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Snackbar
            className={classes.snack}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={open}
            onClose={handleSnackClose}
          >
            <MuiAlert
              severity="success"
              variant="filled"
              onClose={handleSnackClose}
            >
              <Typography variant="h6">
                You have converted your airtime.
              </Typography>
            </MuiAlert>
          </Snackbar>
          <Box mb={3}>
            <FormLabel>
              You have {formatZAR(balance)} airtime available. Please enter the
              amount you wish to use in the Amount field below.
            </FormLabel>
          </Box>
          <Box mb={3}>
            <InputLabel htmlFor="standard-adornment-amount">
              How much?
            </InputLabel>
            <Controller
              name="amount"
              type="number"
              rules={{
                required: "The amount is required.",
                max: {
                  value: balance,
                  message: "You cannot use more than your balance.",
                },
                min: { value: 2, message: "You cannot use less than R2." },
                pattern: {
                  value: /^(\d{1,3}.?\d{0,2})$/,
                  message: "Please use a valid number format ##.##",
                },
              }}
              control={control}
              defaultValue="0"
              render={({ field }) => (
                <Input
                  {...field}
                  startAdornment={
                    <InputAdornment position="start" margin="dense">
                      R
                    </InputAdornment>
                  }
                />
              )}
            />
            <ErrorMessage
              errors={errors}
              name="amount"
              render={({ message }) => (
                <Box mt={1}>
                  <Alert severity="warning">{message}</Alert>
                </Box>
              )}
            />
          </Box>
          <Box mt={3}>
            <CardActions style={{ justifyContent: "center" }}>
              <Button variant="contained" color="primary" type="submit">
                Use Airtime Now
              </Button>
            </CardActions>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
}
