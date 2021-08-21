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
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { useContext } from "react";
import { ContactsContext } from "../contexts/ContactsContext";

export default function DashboardFormRequestAirtime() {
  const context = useContext(ContactsContext);
  const { contacts } = context;

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
      <CardHeader title="Request Airtime" />
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
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
            <InputLabel htmlFor="standard-adornment-amount">
              From who?
            </InputLabel>
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
                Request Airtime Now
              </Button>
            </CardActions>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
}
