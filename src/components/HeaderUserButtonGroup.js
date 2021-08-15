import React, { useContext }  from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import HeaderHelpButtonMenu from './HeaderHelpButtonMenu';
import HeaderUserButtonMenu from '../components/HeaderUserMenuButton';
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
                  { isAuthenticated ? <HeaderNotifcationsButtonMenu /> : null }
                  <HeaderUserButtonMenu />
      </ButtonGroup>
    </div>
  );
}