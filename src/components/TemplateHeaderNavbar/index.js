import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"

import Logo from "../Logo"

const useStyles = makeStyles({
    toolbarContainer: {
        width: "100%"
    }
})

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
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (e, value) => {
        setValue(value)
    }

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed">
                    <Toolbar  className={classes.toolbarContainer} disableGutters>
                        <Logo/>
                        <Typography>TelephantCloud</Typography>
                        <Tabs value={value} onChange={handleChange}>
                            <Tab label="Home"/>
                            <Tab label="Transactions"/>
                            <Tab label="Beneficiaries"/>
                        </Tabs>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </React.Fragment>
  );
}