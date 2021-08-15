import * as React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import HeaderLogo from '../components/HeaderLogo';
import HeaderTabs from '../components/HeaderTabs';
import HeaderUserButtonGroup from '../components/HeaderUserButtonGroup';

const Header = (props) => {
  return (
    <>
    <AppBar elevation={4} style={{ background: '#FFFFFF' }} position="fixed">
      <Toolbar>
          <HeaderLogo color='#ed6524' width="30pt" height="30pt" />
          <Typography  variant="h4" color="textPrimary">Telephant</Typography>
        <HeaderTabs />
        <HeaderUserButtonGroup />
      </Toolbar>
    </AppBar>
    <Toolbar />
    </>
  );
}

export default Header;