import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Typography from '@material-ui/core/Typography';
import Logo from '../components/Logo';
import HeaderTabs from '../components/HeaderTabs';


function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Header (props){
  return (
    <ElevationScroll>
      <AppBar position="fixed" elevation={3}  style={{ background: '#FFFFFF' }}>
        <Toolbar>
          <Logo color='#ed6524' width="30pt" height="30pt" />
          <Typography  variant="h6" component="h1">TelephantCloud</Typography>
          <HeaderTabs />
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}