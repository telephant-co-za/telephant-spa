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
            disableRipple 
            disableFocusRipple>
                  <HelpButtonMenu />
                  <NotifcationsButtonMenu />
        <UserButtonMenu />
      </ButtonGroup>
    </div>
  );
}