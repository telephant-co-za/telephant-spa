import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";

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

    // Fixes the routing on refreshing
    useEffect(()=>{
        if (window.location.pathname === '/' && value != 0) {
            setValue(0)
        } else if (window.location.pathname === '/transactions' && value != 1) {
            setValue(1)
        } else if (window.location.pathname === '/beneficiaries' && value != 2) {
            setValue(2)
        }
    }, [value]);

    return (
        <React.Fragment>
            <ElevationScroll>
                <BrowserRouter>
                    <AppBar position="fixed">
                        <Toolbar  className={classes.toolbarContainer} disableGutters>
                            <Logo/>
                            <Typography>TelephantCloud</Typography>
                            <Tabs value={value} onChange={handleChange}>
                                <Tab label="Home" component={Link} to="/" />
                                <Tab label="Transactions" component={Link} to="/transactions" />
                                <Tab label="Beneficiaries" component={Link} to="/beneficiaries" />
                            </Tabs>
                        </Toolbar>
                    </AppBar>
                    <Switch>
                        <Route exact path="/" component={() => <div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />Home</div>} />
                        <Route exact path="/transactions" component={() => <div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />Transactions</div>} />
                        <Route exact path="/beneficiaries" component={() => <div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />Beneficiaries</div>} />
                    </Switch>
                </BrowserRouter>
            </ElevationScroll>
        </React.Fragment>
  );
}