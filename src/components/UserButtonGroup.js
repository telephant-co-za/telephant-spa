import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles';
import HelpButtonMenu from '../components/HelpButtonMenu';
import UserButtonMenu from './UserButtonMenu';
import NotifcationsButtonMenu from './NotifcationsButtonMenu';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function UserButtonGroup() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
            <HelpButtonMenu />
        <IconButton color="primary" aria-label="upload picture" component="span">
            <NotifcationsButtonMenu />
        </IconButton>
        <IconButton color="primary" aria-label="upload picture" component="span">
            <UserButtonMenu />
        </IconButton>
      </ButtonGroup>
    </div>
  );
}