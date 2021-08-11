import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom'

import FormBuyAirtime from '../forms/FormBuyAirtime';
import FormUseAirtime from '../forms/FormUseAirtime';
import FormSendAirtime from '../forms/FormSendAirtime';
import FormRequestAirtime from '../forms/FormRequestAirtime';
import DashboardAccountBalance from '../components/DashboardAccountBalance';
import DashboardActionCard from '../components/DashboardActionCard';


export default function Dashboard() {

  return (
    <Box p={3}>
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <DashboardAccountBalance /> 
      </Grid>
      <Grid item xs={4}>
        <DashboardActionCard />
      </Grid>
      <Grid item xs={4}>
        <Switch>   
          <Route path={'/airtime/use'} component={FormUseAirtime} />
          <Route path={'/airtime/send'} component={FormSendAirtime} />
          <Route path={'/airtime/request'} component={FormRequestAirtime} />
          <Route path={'/airtime'} component={FormBuyAirtime} />
        </Switch>
      </Grid>
    </Grid>
  </Box>
  );
}


