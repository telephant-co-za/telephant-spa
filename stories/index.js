import React from "react";
import { storiesOf } from "@storybook/react";
import TransactionsExportCard from "../src/components/TransactionsExportCard";
import TransactionsFilterCard from "../src/components/TransactionsFilterCard";
import MaterialUIPickers from "../src/components/DatePicker";
import TransactionsTypeDropdown from "../src/components/TransactionsTypeDropdown";
import TemplateFooterSocialMenu from "../src/components/TemplateFooterSocialMenu";
import TemplateFooterBottomMenu from "../src/components/TemplateFooterBottomMenu";
import TransactionsDataGrid from "../src/components/TransactionsDataGrid";
import TemplateHeaderNavbar from "../src/components/TemplateHeaderNavbar";


storiesOf("Transactions/TransactionsExportCard", module)
    .add("default", () => <TransactionsExportCard /> )

storiesOf("Transactions/TransactionsFilterCard", module)
    .add("default", () => <TransactionsFilterCard /> )

storiesOf("Transactions/DatePicker", module)
    .add("default", () => <MaterialUIPickers /> )

storiesOf("Transactions/TranstactionTypeDropdown", module)
    .add("default", () => <TransactionsTypeDropdown /> )

storiesOf("Transactions/TransactionsDataGrid", module)
    .add("default", () => <TransactionsDataGrid /> ) 

storiesOf("Template/Footer/SocialMenu", module)
    .add("default", () => <TemplateFooterSocialMenu /> )

storiesOf("Template/Footer/BottomMenu", module)
    .add("default", () => <TemplateFooterBottomMenu /> )

storiesOf("Template/Header/Navbar", module)
    .add("default", () => <TemplateHeaderNavbar /> )
