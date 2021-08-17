import React from "react";
import { storiesOf } from "@storybook/react";

import NotificationsList from "../components/NotificationsList";

storiesOf("Notifications/Components/Notifcations List", module).add(
  "NotificationsList (default)",
  () => {
    return <NotificationsList />;
  }
);
