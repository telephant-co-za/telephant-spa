import React from "react";
import { storiesOf } from "@storybook/react";

import TransactionsActionCard from "../components/TransactionsActionCard";
import TransactionsDataGrid from "../components/TransactionsDataGrid";
import TransactionsDetail from "../components/TransactionsDetail";
import TransactionsPDF from "../components/TransactionsPDF";
import TransactionsPDFView from "../components/TransactionsPDFView";
import TransactionsPDFViewDetail from "../components/TransactionsPDFViewDetail";
import { MemoryRouter } from "react-router";
import TransactionsContextProvider from "../contexts/TransactionsContext";

storiesOf("Transactions/Components/Action Card", module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("TransactionsActionCard (default)", () => <TransactionsActionCard />);

storiesOf("Transactions/Components/Data Grid", module)
  .addDecorator((story) => (
    <TransactionsContextProvider>{story()}</TransactionsContextProvider>
  ))
  .add("TransactionsContextProvider (default)", () => {
    return <TransactionsDataGrid />;
  });

storiesOf("Transactions/Components/Detail View", module).add(
  "TransactionsDetail (default)",
  () => {
    return <TransactionsDetail />;
  }
);

/* storiesOf("Transactions/PDF/PDF", module).add("default", () => {
  return <TransactionsPDF />;
}); */
storiesOf("Transactions/PDF/View", module).add("default", () => {
  return <TransactionsPDFView />;
});

storiesOf("Transactions/PDF/ViewDetail", module).add("default", () => {
  return <TransactionsPDFViewDetail />;
});
