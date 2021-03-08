import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import HelpButtonMenu from '../components/HelpButtonMenu';
import UserButtonMenu from './UserButtonMenu';
import NotifcationsButtonMenu from './NotifcationsButtonMenu';

export default function UserButtonGroup() {
  return (
    <div>
      <ButtonGroup 
            color="primary" 
            aria-label="outlined primary button group" 
            disableRipple="true" 
            disableFocusRipple="true">
        <HelpButtonMenu />
        <NotifcationsButtonMenu />
        <UserButtonMenu />
      </ButtonGroup>
    </div>
  );
}