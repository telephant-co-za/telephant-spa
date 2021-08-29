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
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { useContext } from "react";
import { ContactsContext } from "../contexts/ContactsContext";
import { apiRequestAirtime } from "../api/api";
import { ErrorMessage } from "@hookform/error-message";
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

export default function DashboardFormRequestAirtime() {
  const [argh, setArgh] = React.useState("hidden");
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const handleSnackClose = (event) => {
    setOpen(false);
    //history.push("/airtime/use");
  };
  const context = useContext(ContactsContext);
  const { contacts } = context;

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
      apiRequestAirtime({ ...data });
    }
  };

  return (
    <Card style={{ height: "100%" }}>
      <CardHeader title="Request Airtime" />
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
              <Typography variant="h6">You have requested airtime.</Typography>
            </MuiAlert>
          </Snackbar>
          <Box mb={3}>
            <FormLabel>
              You can request an airtime transfer from one of your contacts from
              this page.
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
                  value: 999.99,
                  message: "You cannot ask for more than R999.99",
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
            <InputLabel htmlFor="standard-adornment-amount">
              From who?
            </InputLabel>
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
          </Box>
          <Box mt={3}>
            <CardActions style={{ justifyContent: "center" }}>
              <Button variant="contained" color="primary" type="submit">
                Request Airtime Now
              </Button>
            </CardActions>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
}
