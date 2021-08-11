import React, { Component } from 'react';
import { Box, Button, Card, CardHeader, CardContent, CardActions, Input, InputLabel, InputAdornment, FormLabel } from '@material-ui/core';

export class SubformUserAirtimeStep1 extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
              <Card style={{height: '100%'}}>
                <CardHeader title="Use Airtime" />
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
                      value={values.amount}
                      onChange={handleChange("amount")}
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
}

export default SubformUserAirtimeStep1;

