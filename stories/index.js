import React from "react";
import { storiesOf } from "@storybook/react";
import TransactionsExportCard from "../src/components/TransactionsExportCard";
import TransactionsFilterCard from "../src/components/TransactionsFilterCard";
import MaterialUIPickers from "../src/components/DatePicker";
import TransactionsTypeDropdown from "../src/components/TransactionsTypeDropdown";


storiesOf("Transactions Page/TransactionsExportCard", module)
    .add("default", () => <TransactionsExportCard /> )

storiesOf("Transactions Page/TransactionsFilterCard", module)
    .add("default", () => <TransactionsFilterCard /> )

storiesOf("Transactions Page/DatePicker", module)
    .add("default", () => <MaterialUIPickers /> )

storiesOf("Transactions Page/TranstactionTypeDropdown", module)
    .add("default", () => <TransactionsTypeDropdown /> )

    