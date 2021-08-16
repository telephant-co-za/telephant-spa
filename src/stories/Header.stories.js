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

storiesOf("Header/Layout/Menu/Help/ButtonMenu", module)
.addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
.add("default", () => <HeaderHelpButtonMenu />);

// storiesOf("Header/Layout/Layout", module).add("default", () => {
//   return <HeaderLayout />;
// });


 storiesOf("DONE/Header/Layout/Logo", module).add("default", () => {
   return <HeaderLogo />;
 });


// // storiesOf("Header/Layout/Menu/Notifications/ButtonMenu", module).add(
// //   "default",
// //   () => {
// //     return <HeaderNotificationsButtonMenu />;
// //   }
// // );


// storiesOf("Header/Layout/Menu/User/Group", module).add("default", () => {
//   return <HeaderUserButtonGroup />;
// });


// storiesOf("Header/Layout/Menu/User/Button", module).add("default", () => {
//   return <HeaderUserMenuButton />;
// });
// // storiesOf("Header/Layout/Tabs", module).add("default", () => {
// //   return <HeaderTabs />;
// // });
