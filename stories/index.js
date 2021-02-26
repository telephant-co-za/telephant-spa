import React from "react";
import { storiesOf } from "@storybook/react";
import TransactionsExportCard from "../src/components/TransactionsExportCard";
import TransactionsFilterCard from "../src/components/TransactionsFilterCard";


storiesOf("Transactions Page/TransactionsExportCard", module)
    .add("default", () => <TransactionsExportCard /> )

storiesOf("Transactions Page/TransactionsFilterCard", module)
    .add("default", () => <TransactionsFilterCard /> )