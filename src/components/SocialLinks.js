import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Toolbar from '@material-ui/core/Toolbar';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FacebookIcon from '@material-ui/icons/Facebook';
import ShareIcon from '@material-ui/icons/Share';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function SocialLinks() {
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