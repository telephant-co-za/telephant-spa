import React from "react";
import { storiesOf } from "@storybook/react";

import TransactionsActionCard from "../components/TransactionsActionCard";
import TransactionsDataGrid from "../components/TransactionsDataGrid";
import TransactionsDetail from "../components/TransactionsDetail";
import TransactionsPDF from "../components/TransactionsPDF";
import TransactionsPDFView from "../components/TransactionsPDFView";
import TransactionsPDFViewDetail from "../components/TransactionsPDFViewDetail";
import { MemoryRouter } from "react-router";

storiesOf("Transactions/ActionCard", module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <TransactionsActionCard />);

// storiesOf("Transactions/DataGrid", module).add("default", () => {
//   return <TransactionsDataGrid />;
// });

storiesOf("Transactions/Detail", module).add("default", () => {
  return <TransactionsDetail />;
});

storiesOf("Transactions/PDF/PDF", module).add("default", () => {
  return <TransactionsPDF />;
});
storiesOf("Transactions/PDF/View", module).add("default", () => {
  return <TransactionsPDFView />;
});

storiesOf("Transactions/PDF/ViewDetail", module).add("default", () => {
  return <TransactionsPDFViewDetail />;
});
