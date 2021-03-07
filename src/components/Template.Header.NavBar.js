import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup";
import IconButton from "@material-ui/core/IconButton";
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Paper from '@material-ui/core/Paper';

import Logo from "../Logo"
import { styles } from "@material-ui/pickers/views/Calendar/Calendar";

const useStyles = makeStyles({

    offset: {
       offset: 2
    },

    iconButtons: {
        marginLeft: 'auto'
    },

    logo: {
        marginRight: 'auto'
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
        if (window.location.pathname === '/' && value !== 0) {
            setValue(0)
        } else if (window.location.pathname === '/transactions' && value !== 1) {
            setValue(1)
        } else if (window.location.pathname === '/beneficiaries' && value !== 2) {
            setValue(2)
        }
    }, [value]);

    return (
        <React.Fragment>
            <ElevationScroll>
                <BrowserRouter>
                    <Toolbar position="fixed" disableGutters color="primary">
                            <Button component={Link} to="/" onClick={() => setValue(0)} disableRipple class={styles.logo}>
                                <Logo/>                               
                                <Typography>TelephantCloud</Typography>
                            </Button>
                            <Tabs value={value} onChange={handleChange} centered>
                                <Tab label="Home" component={Link} to="/" />
                                <Tab label="Transactions" component={Link} to="/transactions" />
                                <Tab label="Beneficiaries" component={Link} to="/beneficiaries" />
                            </Tabs>
                                <ButtonGroup className={classes.iconButtons}>
                                    <IconButton aria-label="Help">
                                        <HelpOutlineIcon />
                                    </IconButton>
                                    <IconButton aria-label="Notifications">
                                        <NotificationsNoneIcon />
                                    </IconButton>
                                    <IconButton aria-label="User Actions">
                                        <PersonOutlineIcon />
                                    </IconButton>
                                </ButtonGroup>
                    </Toolbar>
                    <div className={classes.offset} />
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