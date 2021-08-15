import * as React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

import HeaderLogo from "./HeaderLogo";
import HeaderTabs from "./HeaderTabs";
import HeaderUserButtonGroup from "./HeaderUserButtonGroup";

const LayoutHeader = (props) => {
  return (
    <>
      <AppBar elevation={4} style={{ background: "#FFFFFF" }} position="fixed">
        <Toolbar>
          <HeaderLogo color="#ed6524" width="30pt" height="30pt" />
          <Typography variant="h4" color="textPrimary">
            Telephant
          </Typography>
          <HeaderTabs />
          <HeaderUserButtonGroup />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default LayoutHeader;
