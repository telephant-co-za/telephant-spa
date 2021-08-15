import React from "react";
import { storiesOf } from "@storybook/react";

import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

storiesOf("Layouts/Footer", module).add("default", () => {
  return <Footer />;
});
storiesOf("Layouts/Header", module).add("default", () => {
  return <Header />;
});
