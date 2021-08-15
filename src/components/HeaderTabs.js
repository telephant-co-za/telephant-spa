import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Paper, Tabs, Tab } from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import ListIcon from "@material-ui/icons/List";
import PeopleIcon from "@material-ui/icons/People";
import InfoIcon from "@material-ui/icons/Info";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import FindInPageIcon from "@material-ui/icons/FindInPage";

import { AuthContext } from "../contexts/AuthenticationContext";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const HeaderTabs = (props) => {
  const context = useContext(AuthContext);
  const { isAuthenticated } = context;

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (!isAuthenticated) {
    // if not logged in show this menu, for new users
    // will be accessible via help menu as well

    return (
      <Paper className={classes.root} elevation={0}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab icon={<InfoIcon />} label="About" component={Link} to="about" />
          <Tab
            icon={<OndemandVideoIcon />}
            label="Video Explainer"
            component={Link}
            to="video"
          />
          <Tab
            icon={<FindInPageIcon />}
            label="Terms"
            component={Link}
            to="terms"
          />
        </Tabs>
      </Paper>
    );
  }

  if (isAuthenticated) {
    // Menu for signed in users

    return (
      <Paper className={classes.root} elevation={0}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab icon={<HomeIcon />} label="Airtime" component={Link} to="/" />
          <Tab
            icon={<ListIcon />}
            label="Transactions"
            component={Link}
            to="/transactions"
          />
          <Tab
            icon={<PeopleIcon />}
            label="Contacts"
            component={Link}
            to="/contacts"
          />
        </Tabs>
      </Paper>
    );
  }
};

export default HeaderTabs;
