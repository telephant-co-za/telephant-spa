import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { Link, Typography, Paper, Button } from '@material-ui/core';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import SendIcon from '@material-ui/icons/Send';
import CallReceivedIcon from '@material-ui/icons/CallReceived'


export default function Dashboard() {


  return (
    <Box p={3}>
<Grid container xs="12" spacing={3}>
      <Grid item xs="4">
        <Paper>
          <Grid container direction="column" spacing={3}>
            <Grid>
              <Typography variant="h5" gutterBottom align="center">Your balance is</Typography>
            </Grid>
            <Grid>
              <Typography variant="h1" align="left" m={10}>R 123.03</Typography>
            </Grid>
            <Grid>
              <Typography align="right">
                <Link href="#" variant="subtitle1">Transactions...</Link>
              </Typography>
            </Grid>
          </Grid>   
        </Paper>        
      </Grid>
      <Grid item xs="4">
        <Paper>
          <Grid container direction="column" spacing={3} alignItems="center">
            <Grid item>
              <Typography variant="h5" gutterBottom>What would you like to do today?</Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary"  style={{maxWidth: '200px', maxHeight: '30px', minWidth: '200px', minHeight: '30px'}} endIcon={<CreditCardIcon />} >Buy Airtime</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary"  style={{maxWidth: '200px', maxHeight: '30px', minWidth: '200px', minHeight: '30px'}} endIcon={<PhoneInTalkIcon />}>Use Airtime</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary"  style={{maxWidth: '200px', maxHeight: '30px', minWidth: '200px', minHeight: '30px'}} endIcon={<SendIcon />}>Send Airtime</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary"  style={{maxWidth: '200px', maxHeight: '30px', minWidth: '200px', minHeight: '30px'}} endIcon={<CallReceivedIcon />}>Request Airtime</Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs="4">
        <Paper>
          <Typography>What would you like to do today?</Typography>
        </Paper>
      </Grid>
    </Grid>
  </Box>
  );
}


