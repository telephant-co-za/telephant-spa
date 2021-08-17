import React from "react";
import { storiesOf } from "@storybook/react";
import ContactsContextProvider from "../contexts/ContactsContext";

import WidgetDropDownContact from "../components/WidgetDropDownContact";

storiesOf("Contacts/Components/Contacts Drop Down", module)
  .addDecorator((story) => (
    <ContactsContextProvider>{story()}</ContactsContextProvider>
  ))
  .add("WidgetDropDownContact (default)", () => {
    return <WidgetDropDownContact />;
  });
