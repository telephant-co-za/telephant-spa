import React from 'react';
import { Grid, Box } from '@material-ui/core';

import TransactionsExportCard from '../components/TransactionsExportCard'
import TransactionsFilterCard from '../components/TransactionsFilterCard'
import TransactionsDataGrid from '../components/TransactionsDataGrid'

export default function Transactions() {


  return (
<Box p={3}>
    <Grid container xs="12" sm="12" md="12" lg="12" xl="12" spacing={3} >
      <Grid item xs="12" md="3">
        <Grid container spacing={3} direction="column">
          <Grid item>
            <TransactionsFilterCard />
          </Grid>
          <Grid item>
            <TransactionsExportCard />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs="12" md="9">
        <TransactionsDataGrid />
      </Grid>
    </Grid>
</Box>
  );
}


