import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import IconButton from '@material-ui/core/IconButton'

export default function NotificationsButtonMenu() {
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
            <NotificationsNoneOutlinedIcon />
        </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Help Center</MenuItem>
        <MenuItem onClick={handleClose}>Video Explainer</MenuItem>
        <MenuItem onClick={handleClose}>About Telephant</MenuItem>
      </Menu>
    </>
  );
}