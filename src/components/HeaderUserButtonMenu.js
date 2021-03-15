import React from 'react';
import { Menu, MenuItem, IconButton, Link } from '@material-ui/core';

import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

export default function HeaderUserButtonMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
        onClose={handleClose}
      >
        
        <MenuItem component="a" href="/signin">Click Me</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
          
      </Menu>
    </>
  );
}