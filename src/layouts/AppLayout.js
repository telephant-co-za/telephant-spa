import React from 'react';
import { Grid, Card } from '@material-ui/core';

import Header from './Header';
import Footer from './Footer';
//import Transactions from '../pages/Transactions';
import Dashboard from '../pages/Dashboard';

const AppLayout = () => {

  return (
<Grid Container xs={12}>
  <Grid Item xs={12}>
    <Header />
  </Grid>
  <Grid Item xs={12}>
      <Dashboard />
  </Grid>
  <Grid Item xs={12}>
    <Footer />
  </Grid>
</Grid>
  );
};

export default AppLayout;
