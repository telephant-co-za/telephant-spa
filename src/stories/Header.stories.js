import React from "react";
import { storiesOf } from "@storybook/react";
import { MemoryRouter } from "react-router";

import HeaderHelpButtonMenu from "../components/HeaderHelpButtonMenu";
import HeaderLayout from "../components/HeaderLayout";
import HeaderLogo from "../components/HeaderLogo";
import HeaderNotificationsButtonMenu from "../components/HeaderNotifcationsButtonMenu";
import HeaderUserButtonGroup from "../components/HeaderUserButtonGroup";
import HeaderUserMenuButton from "../components/HeaderUserMenuButton";
import HeaderTabs from "../components/HeaderTabs";
import AuthContextProvider from "../contexts/AuthenticationContext";

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
