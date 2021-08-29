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
import { formatZAR } from "../functions/Formatting.js";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { ErrorMessage } from "@hookform/error-message";
import { ContactsContext } from "../contexts/ContactsContext";
import { AuthContext } from "../contexts/AuthenticationContext";
import { apiSendAirtime } from "../api/api";
import MuiAlert from "@material-ui/lab/Alert";
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

export default function DashboardFormSendAirtime() {
  const [argh, setArgh] = React.useState("hidden");
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const handleSnackClose = (event) => {
    setOpen(false);
    //history.push("/airtime/use");
  };

  const context = useContext(BalanceContext);
  const { balance, updateBalance } = context;

  const context2 = useContext(ContactsContext);
  const { contacts } = context2;

  const context3 = useContext(AuthContext);
  const { refresh } = context3;

  let options = [];
  contacts.map((contact, i) => {
    let label = "";
    if (contact.firstName) {
      label = contact.firstName + " ";
    }

    if (contact.lastName) {
      label = label + contact.lastName + " ";
    }
    label = label + "(" + contact.telephoneNumber + ")";

    options[i] = { value: contact.telephoneNumber, label: label };
    return options;
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (!data.contact) {
      // Can't get validation working on this select drop down with react form hooks
      // Therefore don't submit if not set
      // Need to figure out way to validate that field with the library
      // From internet seems to be an issue
      // I make a work around with my Argh variable that does alert the user

      setArgh("visible");
    } else {
      setArgh("hidden");
      setOpen(true);

      apiSendAirtime(data);

      // Balance is a control for "over spend" i.e. we do not want a user to exceed their
      // balance else they will giving away (or using credit) that is not theirs (and will be a loop hole
      // for fraud).  So will update the context balance here
      // The refresh will force a sync between the server and spa - but this delayed and less
      // reliable.  Transactions and notifications are not treated like this

      updateBalance(data.amount); // subtracts the amount from the balance

      // Not totally robust needs some more controls - suitable for POC

      // Because the components Notifications, Contacts, and Transaction are dependent on
      // the states of isAuthenticated and MustRefresh - I am using that as a way
      // Force the components to update on the dashboard etc.
      // Seems to work!!
      refresh();
    }
  };

  return (
    <Card style={{ height: "100%" }}>
      <CardHeader title="Send Airtime" />
      <CardContent>
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
            <Typography variant="h6">You have sent airtime.</Typography>
          </MuiAlert>
        </Snackbar>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box mb={3}>
            <FormLabel>
              You can send airtime credit to one of your contacts from this
              page. You have {formatZAR(balance)} available.
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
                min: { value: 2, message: "You cannot ask for less than R2." },
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
          <Box mb={3}>
            <InputLabel htmlFor="standard-adornment-amount">To who?</InputLabel>
            <br />
            <Controller
              name="contact"
              control={control}
              render={({ field }) => {
                return (
                  <Select options={options} menuPlacement="top" {...field} />
                );
              }}
            />
            <Box mt={1} visibility={argh}>
              <Alert severity="warning">Please select a contact.</Alert>
            </Box>
            <Box mt={3}>
              <CardActions style={{ justifyContent: "center" }}>
                <Button variant="contained" color="primary" type="submit">
                  Send Airtime Now
                </Button>
              </CardActions>
            </Box>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
}
