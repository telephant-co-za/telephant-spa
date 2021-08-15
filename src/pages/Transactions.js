import React from 'react';
import { Grid, Box } from '@material-ui/core';

import TransactionsActionCard from '../components/TransactionsActionCard'
import TransactionsDataGrid from '../components/TransactionsDataGrid'
import TransactionsViewPDF from '../components/TransactionsViewPDF'

const SubView = (props) => {
  return (
  <>
    { props.render() }
  </>
  )
}



export default function Transactions(props) {

  console.log(props.subview)

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
                        {(() => {
                  switch (props.subview) {
                    case "pdf":   return <SubView render={() => <TransactionsViewPDF />} />;
                    default:      return <SubView render={() => <TransactionsDataGrid />} />;
                  }
                })()}    
              </Grid>
            </Grid>
        </Box>
  );
}


