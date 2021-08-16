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
import ContactsDropDown from "./WidgetDropDownContact";
import { useContext } from "react";
import { BalanceContext } from "../contexts/BalanceContext";
import { formatZAR } from "../functions/Formatting.js";

export default function DashboardFormSendAirtime() {
  const context = useContext(BalanceContext);
  const { balance } = context;

  return (
    <Card style={{ height: "100%" }}>
      <CardHeader title="Send Airtime" />
      <CardContent>
        <form noValidate>
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
            <Input
              id="standard-adornment-amount"
              startAdornment={
                <InputAdornment position="start" margin="dense">
                  R
                </InputAdornment>
              }
            />
          </Box>
          <Box mb={3}>
            <InputLabel htmlFor="standard-adornment-amount">To who?</InputLabel>
            <br />
            <ContactsDropDown />
          </Box>
          <Box mt={3}>
            <CardActions style={{ justifyContent: "center" }}>
              <Button variant="contained" color="primary">
                Send Airtime Now
              </Button>
            </CardActions>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
}
