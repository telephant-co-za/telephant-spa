import React from 'react';
import { CardHeader, CardContent, Card, Box, InputLabel, FormLabel, CardActions, Button, InputAdornment, Input } from '@material-ui/core';

export default function FormSendAirtime() {


  return (
    <Card style={{height: '100%'}}>
    <CardHeader title="Request Airtime" />
    <CardContent>
      <form noValidate>
        <Box mb={3}>
          <FormLabel>
            You have R {}.00 airtime available.  Please enter the amount you wish
            to use in the Amount field below.
          </FormLabel>
        </Box>
        <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
        <Input
          id="standard-adornment-amount"
          //value={values.amount}
          //onChange={handleChange("amount")}
          startAdornment={
            <InputAdornment position="start" margin="dense">
              R
            </InputAdornment>
          }
        />
        <CardActions style={{ justifyContent: 'center' }}>
          <Box mt={3}>
            <Button variant="contained" color="primary">
              Use Airtime Now
            </Button>
          </Box>
        </CardActions>
      </form>
    </CardContent>
  </Card>
  );
}