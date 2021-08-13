import React, { useContext } from 'react';
import { Menu, MenuItem, IconButton, Button } from '@material-ui/core';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import {AuthContext} from '../contexts/AuthenticationContext'
import { Link } from 'react-router-dom';

export default function HeaderUserButtonMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const context = useContext(AuthContext);
  const { isAuthenticated, signout } = context;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function clickSignOut(){
      signout();
      handleClose();
  };

  if (isAuthenticated) {
  // Logged in... show this menu
  return (
    <>
        <IconButton color="primary" aria-label="upload picture" component="span" onClick={handleClick}>
            <AccountCircleOutlinedIcon />
        </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClick={handleClose}
      >
        
        <MenuItem component={Link} to="/profile" onClick={handleClose}>My Account</MenuItem>
        <MenuItem onClick={clickSignOut}>Sign Out</MenuItem>
          
      </Menu>
    </>
  );
  }
  else
  {
    // Logged out, show a login and signup button
    return (
    <>
      <Button color="primary" aria-label="upload picture" component={Link} to="/signin" onClick={handleClick}>
        Sign In
      </Button> 
      <Button color="primary" aria-label="upload picture" component={Link} to="/register" onClick={handleClick}>
        Register
      </Button> 
    </>
    ); 
  }
}