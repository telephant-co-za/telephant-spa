import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import HeaderHelpButtonMenu from './HeaderHelpButtonMenu';
import HeaderUserButtonMenu from './HeaderUserButtonMenu';
import HeaderNotifcationsButtonMenu from './HeaderNotifcationsButtonMenu';

export default function HeaderUserButtonGroup() {

  return (
    <div>
      <ButtonGroup 
            color="primary" 
            disableRipple 
            disableFocusRipple>
                  <HeaderHelpButtonMenu />
                  <HeaderNotifcationsButtonMenu />
                  <HeaderUserButtonMenu />
      </ButtonGroup>
    </div>
  );
}