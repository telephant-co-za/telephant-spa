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
  Input
} from "@material-ui/core";
import { useContext } from "react";
import { BalanceContext } from "../contexts/BalanceContext";
import { formatZAR } from "../functions/Formatting";
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function DashboardFormUseAirtime() {
  const context = useContext(BalanceContext);
  const { balance } = context;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log({ ...data });

  return (
    <Card style={{ height: "100%" }}>
      <CardHeader title="Use Airtime" />
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
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
              rules={{ 
                required: "The amount is required."
              }}
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
            <ErrorMessage
              errors={errors}
              name="amount"
              render={({ message }) => <Box mt={1}><Alert severity="warning">{message}</Alert></Box>}
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
