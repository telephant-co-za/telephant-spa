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
import FooterCopyrightNotice from "../components/FooterCopyrightNotice";
import FooterLayout from "../components/FooterLayout";
import FooterSocialLinks from "../components/FooterSocialLinks";
import HeaderHelpButtonMenu from "../components/HeaderHelpButtonMenu";
import HeaderLayout from "../components/HeaderLayout";
import HeaderLogo from "../components/HeaderLogo";
import HeaderNotificationsButtonMenu from "../components/HeaderNotifcationsButtonMenu";
import HeaderUserButtonGroup from "../components/HeaderUserButtonGroup";
import HeaderUserMenuButton from "../components/HeaderUserMenuButton";
import HeaderTabs from "../components/HeaderTabs";
import AuthContextProvider from "../contexts/AuthenticationContext";
import NotificationsList from "../components/NotificationsList";
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
import TransactionsActionCard from "../components/TransactionsActionCard";
import TransactionsDataGrid from "../components/TransactionsDataGrid";
import TransactionsDetail from "../components/TransactionsDetail";
import TransactionsPDF from "../components/TransactionsPDF";
import TransactionsPDFView from "../components/TransactionsPDFView";
import TransactionsPDFViewDetail from "../components/TransactionsPDFViewDetail";
import TransactionsContextProvider from "../contexts/TransactionsContext";
import WidgetDropDownContact from "../components/WidgetDropDownContact";

// DASHBOARD

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

// FOOTER

storiesOf("Layout/Footer/Copyright Notice", module).add("default", () => {
  return <FooterCopyrightNotice />;
});
storiesOf("Layout/Footer/Layout", module).add("Footer", () => {
  return <FooterLayout />;
});
storiesOf("Layout/Footer/Social Links", module).add("default", () => {
  return <FooterSocialLinks />;
});

storiesOf("Layout/Header/Menu/Help Button", module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <HeaderHelpButtonMenu />);

storiesOf("Layout/Header/Layout", module)
  .addDecorator((story) => <AuthContextProvider>{story()}</AuthContextProvider>)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    return <HeaderLayout />;
  });

storiesOf("Layout/Header/Logo", module).add("default", () => {
  return <HeaderLogo />;
});

storiesOf("Layout/Header/Menu/Notifcations Button", module).add(
  "default",
  () => {
    return <HeaderNotificationsButtonMenu />;
  }
);

// HEADER

storiesOf("Layout/Header/Menu/User Group", module)
  .addDecorator((story) => <AuthContextProvider>{story()}</AuthContextProvider>)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    return <HeaderUserButtonGroup />;
  });

storiesOf("Layout/Header/Menu/User Button", module)
  .addDecorator((story) => <AuthContextProvider>{story()}</AuthContextProvider>)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    return <HeaderUserMenuButton />;
  });

storiesOf("Layout/Header/Tabs", module)
  .addDecorator((story) => <AuthContextProvider>{story()}</AuthContextProvider>)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    return <HeaderTabs />;
  });

// NOTIFICATIONS

storiesOf("Notifications/Components/Notifcations List", module).add(
  "NotificationsList (default)",
  () => {
    return <NotificationsList />;
  }
);

// PAGES

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

storiesOf("Authentication/Pages/Profile", module).add(
  "PageProfile (default)",
  () => {
    return <PageProfile />;
  }
);

storiesOf("Authentication/Pages/Register", module).add(
  "PageRegister (default)",
  () => {
    return <PageRegister />;
  }
);

storiesOf("Authentication/Pages/Signin", module).add(
  "PageSignin (default)",
  () => {
    return <PageSignin />;
  }
);

storiesOf("Static Pages/Terms", module).add("PageTerms (default)", () => {
  return <PageTerms />;
});

storiesOf("Transactions/Pages", module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("PageTransactions (default)", () => {
    return <PageTransactions />;
  });

storiesOf("Static Pages/Video", module).add("PageVideo (default)", () => {
  return <PageVideo />;
});

// TRANSACTIONS

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

storiesOf("Transactions/PDF/PDF", module).add("default", () => {
  return <TransactionsPDF />;
});
storiesOf("Transactions/PDF/View", module).add("default", () => {
  return <TransactionsPDFView />;
});

storiesOf("Transactions/PDF/ViewDetail", module).add("default", () => {
  return <TransactionsPDFViewDetail />;
});

// WIDGET

storiesOf("Contacts/Components/Contacts Drop Down", module)
  .addDecorator((story) => (
    <ContactsContextProvider>{story()}</ContactsContextProvider>
  ))
  .add("WidgetDropDownContact (default)", () => {
    return <WidgetDropDownContact />;
  });
