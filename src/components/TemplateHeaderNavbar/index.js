import React from "react";
//import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Typography from "@material-ui/core/Typography"

import Logo from "../Logo"

// Elevate App Bar effect from https://material-ui.com/components/app-bar/
function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
      });
    }
// -- END OF Elevate App Bar Effect function--


export default function TemplateHeaderNavbar() {
    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed">
                    <Toolbar disableGutters>
<Logo/>
                        <Typography>TelephantCloud</Typography>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </React.Fragment>
  );
}