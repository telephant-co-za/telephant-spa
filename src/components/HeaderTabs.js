import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Paper, Tabs, Tab } from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import PeopleIcon from '@material-ui/icons/People';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const HeaderTabs = (props) => {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
          <Tab icon={<ListIcon />} label="Transactions" component={Link} to="/transactions" />
          <Tab icon={<PeopleIcon />} label="Friends" component={Link} to="/beneficiaries" />
        </Tabs>
      </Paper>
  );
}

export default HeaderTabs;