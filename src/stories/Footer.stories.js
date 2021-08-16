import React from "react";
import { storiesOf } from "@storybook/react";

import FooterCopyrightNotice from "../components/FooterCopyrightNotice";
import FooterLayout from "../components/FooterLayout";
import FooterSocialLinks from "../components/FooterSocialLinks";

storiesOf("DONE/Footer/Components/Copyright Notice", module).add(
  "default",
  () => {
    return <FooterCopyrightNotice />;
  }
);
storiesOf("DONE/Footer", module).add("Footer", () => {
  return <FooterLayout />;
});
storiesOf("DONE/Footer/Components/Social Links", module).add("default", () => {
  return <FooterSocialLinks />;
});
