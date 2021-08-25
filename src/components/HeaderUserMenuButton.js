import React, { useContext } from "react";
import { Menu, MenuItem, IconButton, Button } from "@material-ui/core";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { AuthContext } from "../contexts/AuthenticationContext";
import { Link } from "react-router-dom";

import { BalanceContext } from "../contexts/BalanceContext";
import { TransactionsContext } from "../contexts/TransactionsContext";
import { ContactsContext } from "../contexts/ContactsContext";
import { NotificationsContext } from "../contexts/NotificationsContext";

export default function HeaderUserButtonMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const context = useContext(AuthContext);
  const { isAuthenticated, signout } = context;

  const balanceContext = useContext(BalanceContext);
  const { clearBalance } = balanceContext;

  const contactsContext = useContext(ContactsContext);
  const { clearContacts } = contactsContext;

  const transactionsContext = useContext(TransactionsContext);
  const { clearTransactions } = transactionsContext;

  const notificationsContext = useContext(NotificationsContext);
  const { clearNotifications } = notificationsContext;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function clickSignOut() {
    clearNotifications();
    clearTransactions();
    clearBalance();
    clearContacts();
    signout();
    handleClose();
  }

  if (isAuthenticated) {
    // Logged in... show this menu
    return (
      <>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
          onClick={handleClick}
        >
          <AccountCircleOutlinedIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClick={handleClose}
        >
          <MenuItem component={Link} to="profile" onClick={handleClose}>
            My Account
          </MenuItem>
          <MenuItem onClick={clickSignOut}>Sign Out</MenuItem>
        </Menu>
      </>
    );
  } else {
    // Logged out, show a login and signup button
    return (
      <>
        <Button
          color="primary"
          aria-label="upload picture"
          component={Link}
          to="signin"
        >
          Sign In
        </Button>
        <Button
          color="primary"
          aria-label="upload picture"
          component={Link}
          to="register"
        >
          Register
        </Button>
      </>
    );
  }
}
