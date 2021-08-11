import React from 'react';
import { CardHeader, CardContent, Card, Box, FormLabel } from '@material-ui/core';

export default function FormRequestAirtime() {


  return (
    <Card style={{height: '100%'}}>
    <CardHeader title="Buy Airtime" />
    <CardContent>
        <Box mb={3}>
          <FormLabel>
            Instructions
          </FormLabel>
          <p>You can buy airtime with an electronic funds transfer (EFT) or cash deposit using the details below.  <b>Very Important</b>  Please ensure that you use the our reference on the deposit:</p>
          <table>
            <tr><td><b>Account Name</b></td><td>Telephant</td></tr>
            <tr><td><b>Bank</b></td><td>First National Bank</td></tr>
            <tr><td><b>Account Number</b></td><td>987654321</td></tr>
            <tr><td><b>Branch Name</b></td><td>Sandton</td></tr>
            <tr><td><b>Reference</b></td><td>HJCY3HFM4K</td></tr>
          </table>
        </Box>
    </CardContent>
  </Card>
  );
}