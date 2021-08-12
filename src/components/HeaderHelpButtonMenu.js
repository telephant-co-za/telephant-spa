import React from 'react';
import { Menu, MenuItem, IconButton } from '@material-ui/core';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { Link } from 'react-router-dom';

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
        <MenuItem onClick={handleClose} component={Link} to='/video'><Link href='/video'></Link>Video Explainer</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to='/about'>About Telephant</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to='/terms'>Terms</MenuItem>
      </Menu>
    </>
  );
}