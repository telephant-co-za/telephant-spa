import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ListIcon from '@material-ui/icons/List';
import PeopleIcon from '@material-ui/icons/People';
import { Link } from 'react-router-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Beneficiaries from '../pages/Beneficiaries';
import Transactions from '../pages/Transactions';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function HeaderTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <><BrowserRouter>
      <Paper className={classes.root} elevation={0}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="primary"
          centered  
        >
          <Tab icon={<AccountBalanceIcon />} label="Account" component={Link} to="/" />
          <Tab icon={<ListIcon />} label="Transactions" component={Link} to="transactions" />
          <Tab icon={<PeopleIcon />} label="Beneficiaries" component={Link} to="beneficiaries" />
        </Tabs>
      </Paper>
      
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/beneficiaries" component={Beneficiaries} />
        <Route exact path="/transactions" component={Transactions} />
      </Switch>
    </BrowserRouter>
    </>
  );
}