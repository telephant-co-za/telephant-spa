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
import BalanceContextProvider from "../contexts/BalanceContext";
import ContactsContextProvider from "../contexts/ContactsContext";

storiesOf("Dashboard/Components/Account Balance", module)
  .addDecorator((story) => (
    <BalanceContextProvider>{story()}</BalanceContextProvider>
  ))
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <DashboardAccountBalance />);

storiesOf("Dashboard/Components/Action Card", module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <DashboardActionCard />);

storiesOf("Dashboard/Components/Action Card Button", module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <DashboardActionCardButton />);

storiesOf("Dashboard/Components/Bar Chart", module).add("default", () => (
  <DashboardChartBar />
));

storiesOf("Dashboard/Components/Line Chart", module).add("default", () => (
  <DashboardChartLine />
));

storiesOf("Dashboard/Forms/Buy Airtime", module).add("default", () => {
  return <DashboardFormBuyAirtime />;
});

storiesOf("Dashboard/Forms/Requst Airtime", module)
  .addDecorator((story) => (
    <ContactsContextProvider>{story()}</ContactsContextProvider>
  ))
  .add("default", () => <DashboardFormRequstAirtime />);

storiesOf("Dashboard/Forms/Send Airtime", module)
  .addDecorator((story) => (
    <BalanceContextProvider>{story()}</BalanceContextProvider>
  ))
  .addDecorator((story) => (
    <ContactsContextProvider>{story()}</ContactsContextProvider>
  ))
  .add("default", () => <DashboardFormSendAirtime />);

storiesOf("Dashboard/Forms/Use Airtime", module)
  .addDecorator((story) => (
    <BalanceContextProvider>{story()}</BalanceContextProvider>
  ))
  .add("default", () => <DashboardFormUseAirtime />);
