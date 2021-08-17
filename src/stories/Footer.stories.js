import React from "react";
import { storiesOf } from "@storybook/react";

import FooterCopyrightNotice from "../components/FooterCopyrightNotice";
import FooterLayout from "../components/FooterLayout";
import FooterSocialLinks from "../components/FooterSocialLinks";

storiesOf("Layout/Footer/Copyright Notice", module).add("default", () => {
  return <FooterCopyrightNotice />;
});
storiesOf("Layout/Footer/Layout", module).add("Footer", () => {
  return <FooterLayout />;
});
storiesOf("Layout/Footer/Social Links", module).add("default", () => {
  return <FooterSocialLinks />;
});
