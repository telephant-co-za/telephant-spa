import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom'

import TransactionsActionCard from '../components/TransactionsActionCard'
import TransactionsDataGrid from '../components/TransactionsDataGrid'
import TransactionDetail from '../components/TransactionDetail'
import TransactionsViewPDF from '../components/TransactionsViewPDF'

export default function Transactions() {


  return (
        <Box p={3}>
            <Grid container spacing={3} >
              <Grid item xs={12} md={3}>
                <Grid container spacing={3} direction="column">
                  <Grid item>
                    <TransactionsActionCard />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={9}>
                <Switch>
                  <Route exact path={'/transactions'} component={TransactionsDataGrid} />
                  <Route path={'/transactions/item/:itemId'} component={TransactionDetail} />
                  <Route path={'/transactions/item/:itemId/pdf'} component={TransactionsViewPDF} />
                  <Route path={'/transactions/pdf'} component={TransactionsViewPDF} />
                </Switch>
              </Grid>
            </Grid>
        </Box>
  );
}


