import React from "react";
import { storiesOf } from "@storybook/react";
import TransactionsExportCard from "../src/components/TransactionsExportCard";


storiesOf("Transactions Page/TransactionsExportCard", module)
    .add("default", () => <TransactionsExportCard /> )