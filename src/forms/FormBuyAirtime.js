import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

export default function buyAirtime() {


  return (
    <Grid container direction="column" spacing={3} alignItems="center">
      <Grid item>
        <Typography variant="h5" gutterBottom>Buy Airtime?</Typography>
      </Grid>

    </Grid>
  );
}