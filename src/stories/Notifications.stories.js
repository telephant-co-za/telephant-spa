import React from "react";
import { storiesOf } from "@storybook/react";

import NotificationsList from "../components/NotificationsList";

storiesOf("Notifications/NotifcationsList", module).add("default", () => {
  return <NotificationsList />;
});
