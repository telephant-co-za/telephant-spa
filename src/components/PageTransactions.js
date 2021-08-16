/* eslint-disable default-case */
import React from "react";
import { Grid, Box } from "@material-ui/core";

import TransactionsActionCard from "../components/TransactionsActionCard";
import TransactionsDataGrid from "../components/TransactionsDataGrid";
import TransactionsViewPDF from "../components/TransactionsPDFView";
import TransactionsDetail from "../components/TransactionsDetail";
import TransactionsViewDetailPDF from "../components/TransactionsPDFViewDetail";

const SubView = (props) => {
  return <>{props.render()}</>;
};

export default function PageTransactions(props) {
  return (
    <Box p={3}>
      <Grid container spacing={3}>
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
              case "detail":
                return <SubView render={() => <TransactionsDetail />} />;
              case "pdf":
                return <SubView render={() => <TransactionsViewPDF />} />;
              case "pdf-detail":
                return <SubView render={() => <TransactionsViewDetailPDF />} />;
              case "datagrid":
                return <SubView render={() => <TransactionsDataGrid />} />;
            }
          })()}
        </Grid>
      </Grid>
    </Box>
  );
}
