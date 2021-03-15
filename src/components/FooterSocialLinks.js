import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, BottomNavigation, Toolbar, BottomNavigationAction } from '@material-ui/core';

import FacebookIcon from '@material-ui/icons/Facebook';
import ShareIcon from '@material-ui/icons/Share';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function FooterSocialLinks() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
            <React.Fragment>
                <Toolbar style={{ justifyContent: "center" }}> 
                    <Typography>Share with your Family and Friends.</Typography>
                </Toolbar>
                <Toolbar style={{ justifyContent: "center" }}> 
                    <BottomNavigation
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        showLabels
                        className={classes.root}
                    >
                        <BottomNavigationAction label="Facebook" icon={<FacebookIcon />} />
                        <BottomNavigationAction label="Twitter" icon={<TwitterIcon />} />
                        <BottomNavigationAction label="Share" icon={<ShareIcon />} />
                    </BottomNavigation>
                </Toolbar>
            </React.Fragment>
  );
}