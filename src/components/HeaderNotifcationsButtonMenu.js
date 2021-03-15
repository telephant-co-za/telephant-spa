import React from 'react';
import { Menu, MenuItem, IconButton } from '@material-ui/core';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';

export default function HeaderNotificationsButtonMenu() {
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
        <IconButton 
            color="primary" 
            aria-label="upload picture" 
            onClick={handleClick}>
            <NotificationsNoneOutlinedIcon />
        </IconButton>
        <Menu
            id="notifications-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>New Notifications</MenuItem>
        </Menu>
    </>
  );
}