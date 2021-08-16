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
import PageTransactions from "../components/PageTransactions";
import PageVideo from "../components/PageVideo";

storiesOf("DONE/Pages/Static and Public/About", module).add("About", () => {
  return <PageAbout />;
});
// storiesOf("Pages/Views/Contacts", module).add("Contacts", () => {
//   return <PageContacts />;
// });
storiesOf("Pages/Views/Dashboard", module).add("Dashboard", () => {
  return <PageDashboard />;
});
storiesOf("DONE/Pages/Static and Public/404", module).add("404", () => {
  return <PageNotFound />;
});
storiesOf("Pages/Authentication/Profile", module).add("Profile", () => {
  return <PageProfile />;
});
storiesOf("Pages/Authentication/Register", module).add("Register", () => {
  return <PageRegister />;
});
storiesOf("Pages/Authentication/Signin", module).add("Signin", () => {
  return <PageSignin />;
});
storiesOf("DONE/Pages/Static and Public/Terms", module).add("Terms", () => {
  return <PageTerms />;
});
// storiesOf("Pages/Views/Transactions", module).add("Transactions", () => {
//   return <PageTransactions />;
// });
storiesOf("DONE/Pages/Static and Public/Video", module).add("Video", () => {
  return <PageVideo />;
});
