import React from 'react';
import { Menu, MenuItem, IconButton } from '@material-ui/core';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import Badge from '@material-ui/core/Badge';
import {useEffect, useState} from "react";
import axios from 'axios'
import NotificationsList from './NotificationsList'

export default function HeaderNotificationsButtonMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [count, setCount] = useState([])

  useEffect(() => {
    axios
      .get('http://www.telephant.co.za/count.json')
      .then(response => {
        setCount(response.data.unread)
      })
  }, [])

  return (
    <>
        <IconButton 
            color="primary" 
            aria-label="upload picture" 
            onClick={handleClick}>
              <Badge badgeContent={count} color="primary">
                <NotificationsNoneOutlinedIcon />
              </Badge>
        </IconButton>
        <Menu
            id="notifications-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
          <MenuItem onClick={handleClose} style={{ width: '620px' }}>
            <NotificationsList />
          </MenuItem>
        </Menu>
    </>
  );
}