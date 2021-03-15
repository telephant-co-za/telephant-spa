import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import HeaderLogo from '../components/HeaderLogo';
import HeaderTabs from '../components/HeaderTabs';
import HeaderUserButtonGroup from '../components/HeaderUserButtonGroup';

export default function Header (props){
  return (
    <>
    <AppBar elevation={4} style={{ background: '#FFFFFF' }} position="fixed">
      <Toolbar>
        <HeaderLogo color='#ed6524' width="30pt" height="30pt" />
        <Typography  variant="h6" component="h1" color="textPrimary">TelephantCloud</Typography>
        <HeaderTabs />
        <HeaderUserButtonGroup />
      </Toolbar>
    </AppBar>
    <Toolbar />
    </>
  );
}