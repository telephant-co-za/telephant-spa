import React from "react";
import { Grid, Box } from "@material-ui/core";

import FormBuyAirtime from "../components/DashboardFormBuyAirtime";
import FormUseAirtime from "../components/DashboardFormUseAirtime";
import FormSendAirtime from "../components/DashboardFormSendAirtime";
import FormRequestAirtime from "../components/DashboardFormRequestAirtime";

import DashboardAccountBalance from "../components/DashboardAccountBalance";
import DashboardActionCard from "../components/DashboardActionCard";
import DashboardChartBar from "../components/DashboardChartBar";
import DashboardChartLine from "../components/DashboardChartLine";

const SubForm = (props) => {
  return <>{props.render()}</>;
};

export default function PageDashboard(props) {
  return (
    <Box p={3}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <DashboardChartBar />
        </Grid>
        <Grid item xs={6}>
          <DashboardChartLine />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <DashboardAccountBalance />
        </Grid>
        <Grid item xs={4}>
          <DashboardActionCard />
        </Grid>
        <Grid item xs={4}>
          {(() => {
            switch (props.subform) {
              case "request":
                return <SubForm render={() => <FormRequestAirtime />} />;
              case "send":
                return <SubForm render={() => <FormSendAirtime />} />;
              case "buy":
                return <SubForm render={() => <FormBuyAirtime />} />;
              case "use":
                return <SubForm render={() => <FormUseAirtime />} />;
              default:
                return <SubForm render={() => <FormUseAirtime />} />;
            }
          })()}
        </Grid>
      </Grid>
    </Box>
  );
}
