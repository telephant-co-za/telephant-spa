import React from "react";
import { storiesOf } from "@storybook/react";

import PageAbout from "../components/PageAbout";
import PageContacts from "../components/PageContacts";
import PageDashboard from "../components/PageDashboard";
import PageNotFound from "../components/PageProfile";
import PageProfile from "../components/PageProfile";
import PageRegister from "../components/PageRegister";
import PageSignin from "../components/PageSignIn";
import PageTerms from "../components/PageTerms";
//import PageTransactions from "../components/PageTransactions";
import PageVideo from "../components/PageVideo";
import ContactsContextProvider from "../contexts/ContactsContext";
import { MemoryRouter } from "react-router";
//import TransactionsContextProvider from "../contexts/TransactionsContext";
import AuthContextProvider from "../contexts/AuthenticationContext";

storiesOf("Static Pages/About", module).add("About", () => {
  return <PageAbout />;
});

storiesOf("Contacts/Page", module)
  .addDecorator((story) => (
    <ContactsContextProvider>{story()}</ContactsContextProvider>
  ))
  .add("PageContacts (default)", () => {
    return <PageContacts />;
  });

storiesOf("Dashboard/Pages", module).add("default", () => {
  return <PageDashboard />;
});

storiesOf("Static Pages/404", module).add("PageNotFound (default)", () => {
  return <PageNotFound />;
});

storiesOf("Authentication/Pages/Profile", module)
  .addDecorator((story) => <AuthContextProvider>{story()}</AuthContextProvider>)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("PageProfile (default)", () => {
    return <PageProfile />;
  });

storiesOf("Authentication/Pages/Register", module)
  .addDecorator((story) => <AuthContextProvider>{story()}</AuthContextProvider>)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("PageRegister (default)", () => {
    return <PageRegister />;
  });

storiesOf("Authentication/Pages/Signin", module)
  .addDecorator((story) => <AuthContextProvider>{story()}</AuthContextProvider>)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("PageSignin (default)", () => {
    return <PageSignin />;
  });

storiesOf("Static Pages/Terms", module).add("PageTerms (default)", () => {
  return <PageTerms />;
});

/* storiesOf("Transactions/Pages", module)
  .addDecorator((story) => (
    <TransactionsContextProvider>{story()}</TransactionsContextProvider>
  ))
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("PageTransactions (default)", () => {
    return <PageTransactions />;
  }); */

storiesOf("Static Pages/Video", module).add("PageVideo (default)", () => {
  return <PageVideo />;
});
