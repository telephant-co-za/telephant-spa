import React from 'react';
import { Menu, MenuItem, IconButton, Link } from '@material-ui/core';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

export default function HeaderHelpButtonMenu() {
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
            <HelpOutlineIcon />
        </IconButton>
      <Menu
          id="help-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
      >
        <MenuItem onClick={handleClose} component={Link} target='_blank' href='http://help.telephant.co.za'>Help Center</MenuItem>
        <MenuItem onClick={handleClose}>Video Explainer</MenuItem>
        <MenuItem onClick={handleClose}>About Telephant</MenuItem>
      </Menu>
    </>
  );
}