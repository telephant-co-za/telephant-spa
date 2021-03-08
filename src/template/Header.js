import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Logo from '../components/Logo';
import HeaderTabs from '../components/HeaderTabs';
import UserButtonGroup from '../components/UserButtonGroup';

export default function Header (props){
  return (
    <AppBar position="fixed" elevation={4} style={{ background: '#FFFFFF' }}>
      <Toolbar>
        <Logo color='#ed6524' width="30pt" height="30pt" />
        <Typography  variant="h6" component="h1" color="textPrimary">TelephantCloud</Typography>
        <HeaderTabs />
        <UserButtonGroup />
      </Toolbar>
    </AppBar>
  );
}