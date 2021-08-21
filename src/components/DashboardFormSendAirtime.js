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
} from "@material-ui/core";
import { useContext } from "react";
import { BalanceContext } from "../contexts/BalanceContext";
import { formatZAR } from "../functions/Formatting.js";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { ContactsContext } from "../contexts/ContactsContext";

export default function DashboardFormSendAirtime() {
  const context = useContext(BalanceContext);
  const { balance } = context;

  const context2 = useContext(ContactsContext);
  const { contacts } = context2;

  let options = [];
  contacts.map((contact, i) => {
    let label;
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
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log({ ...data });

  return (
    <Card style={{ height: "100%" }}>
      <CardHeader title="Send Airtime" />
      <CardContent>
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
              control={control}
              defaultValue=""
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
          </Box>
          <Box mb={3}>
            <InputLabel htmlFor="standard-adornment-amount">To who?</InputLabel>
            <br />
            <Controller
              name="contact"
              control={control}
              render={({ field: { onChange, onBlur, value, ref } }) => {
                return (
                  <Select
                    options={options}
                    onChange={onChange}
                    menuPlacement="top"
                  />
                );
              }}
            />
          </Box>
          <Box mt={3}>
            <CardActions style={{ justifyContent: "center" }}>
              <Button variant="contained" color="primary" type="submit">
                Send Airtime Now
              </Button>
            </CardActions>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
}
