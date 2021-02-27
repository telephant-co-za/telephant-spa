import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar"
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

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
        <ElevationScroll>
            <AppBar position="fixed">
                <Toolbar>TelephantCloud</Toolbar>
            </AppBar>
        </ElevationScroll>
  );
}