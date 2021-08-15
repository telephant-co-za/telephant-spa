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

function formatZAR(value) {
  const currencyFormatter = new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
  });

  return currencyFormatter.format(Number(value));
}

export default function DashboardFormRequestAirtime() {
  const context = useContext(BalanceContext);
  const { balance } = context;

  return (
    <Card style={{ height: "100%" }}>
      <CardHeader title="Use Airtime" />
      <CardContent>
        <form noValidate>
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
            <Input
              id="standard-adornment-amount"
              startAdornment={
                <InputAdornment position="start" margin="dense">
                  R
                </InputAdornment>
              }
            />
          </Box>
          <Box mt={3}>
            <CardActions style={{ justifyContent: "center" }}>
              <Button variant="contained" color="primary">
                Use Airtime Now
              </Button>
            </CardActions>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
}
