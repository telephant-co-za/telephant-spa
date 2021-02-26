import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../../images/logo.jpg";
import { TextareaAutosize } from "@material-ui/core";


import ListIcon from '@material-ui/icons/List';
import GroupIcon from "@material-ui/icons/Group";
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2),
      color: 'white'
    },
    title: {
      flexGrow: 1,
      textAlign: "center"
    },
    logo: {
      maxWidth: 40,
      marginRight: theme.spacing(2)
    }
  })
);

export default function TemplateHeaderNavbar() {
    const classes = useStyles();
    return (
    <div className={classes.root}>
      <AppBar position="static">
      <Toolbar>
          <img src={logo} alt="Kitty Katty!" className={classes.logo}/>
          <Typography variant="h6"  className={classes.title}>
            TelephantCloud
          </Typography>
            <IconButton className={classes.menuButton}>
                <AccountBalanceIcon />
                <Typography variant="h6">
                    Home Page Balance
                </Typography>
            </IconButton>
            <IconButton className={classes.menuButton}>
                <ListIcon />
                <Typography variant="h6">
                    Transactions
                </Typography>
            </IconButton>
            <IconButton className={classes.menuButton}>
                <GroupIcon />
                <Typography variant="h6">
                    Beneficiaries
                </Typography>
            </IconButton>
            <IconButton className={classes.menuButton}>
                <HelpOutlineIcon />
            </IconButton>
            <IconButton className={classes.menuButton}>
                <HelpOutlineIcon />
            </IconButton>
            <IconButton className={classes.menuButton}>
                <AccountCircleOutlinedIcon />
                <ExpandMoreIcon />
            </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
