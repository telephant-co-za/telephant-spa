import React from "react";
import { storiesOf } from "@storybook/react";

import DashboardAccountBalance from "../components/DashboardAccountBalance";
import DashboardActionCard from "../components/DashboardActionCard";
import DashboardActionCardButton from "../components/DashboardActionCardButton";
import DashboardChartBar from "../components/DashboardChartBar";
import DashboardChartLine from "../components/DashboardChartLine";
import DashboardFormBuyAirtime from "../components/DashboardFormBuyAirtime";
import DashboardFormRequstAirtime from "../components/DashboardFormRequestAirtime";
import DashboardFormSendAirtime from "../components/DashboardFormSendAirtime";
import DashboardFormUseAirtime from "../components/DashboardFormUseAirtime";
import { MemoryRouter } from "react-router";
storiesOf("Dashboard/Account/Balance", module);
// .add("default", () => {
//   let context = { balance: 0 };
//   return <DashboardAccountBalance balance={context.balance} />;
// })
// .add("100", () => {
//   let balance = 100.0;
//   return <DashboardAccountBalance balance={balance} />;
// });

storiesOf("Dashboard/ActionCard/ActionCard", module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <DashboardActionCard />);

storiesOf("Dashboard/ActionCard/Button", module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <DashboardActionCardButton />);

/* storiesOf("Dashboard/Chart/Bar", module).add("default", () => {
  return <DashboardChartBar />;
});
storiesOf("Dashboard/Chart/Line", module).add("default", () => {
  return <DashboardChartLine />;
});
storiesOf("Dashboard/Form/BuyAirtime", module).add("default", () => {
  return <DashboardFormBuyAirtime />;
}); */
// storiesOf("Dashboard/Form/RequstAirtime", module).add("default", () => {
//   return <DashboardFormRequstAirtime />;
// });
// storiesOf("Dashboard/Form/SendAirtime", module).add("default", () => {
//   return <DashboardFormSendAirtime />;
// });
/* storiesOf("Dashboard/Form/UseAirtime", module).add("default", () => {
  return <DashboardFormUseAirtime />;
}); */
