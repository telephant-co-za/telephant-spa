import React, { useContext }  from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import HeaderHelpButtonMenu from './HeaderHelpButtonMenu';
import HeaderUserButtonMenu from './HeaderUserButtonMenu';
import HeaderNotifcationsButtonMenu from './HeaderNotifcationsButtonMenu';
import {AuthContext} from '../contexts/AuthenticationContext'

export default function HeaderUserButtonGroup() {

  const context = useContext(AuthContext);
  const { isAuthenticated } = context;

  return (
    <div>
      <ButtonGroup 
            color="primary" 
            disableRipple 
            disableFocusRipple>
                  <HeaderHelpButtonMenu />
                  { isAuthenticated ? <HeaderNotifcationsButtonMenu /> : <></> }
                  <HeaderUserButtonMenu />
      </ButtonGroup>
    </div>
  );
}