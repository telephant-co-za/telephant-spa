import React, { useContext } from "react";
import {
  Menu,
  MenuItem,
  IconButton,
  List,
  ListItem,
  Button,
  Grid,
} from "@material-ui/core";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import Badge from "@material-ui/core/Badge";
import { useEffect, useState } from "react";
import NotificationsList from "./NotificationsList";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { NotificationsContext } from "../contexts/NotificationsContext";
import { makeStyles } from "@material-ui/core/styles";
import { apiGetNotificationsCount } from "../api/api";

const useStyles = makeStyles((theme) => ({
  root: {
    "&:hover": {
      backgroundColor: "white",
    },
  },
}));

export default function HeaderNotificationsButtonMenu() {
  const classes = useStyles();
  const context = useContext(NotificationsContext);
  const { markAllNotificationsRead } = context;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const markAllRead = () => {
    setCount(0);
    markAllNotificationsRead();
  };

  const markOneAsRead = () => {
    setCount(count - 1);
  };

  const [count, setCount] = useState([]);

  useEffect(() => {
    apiGetNotificationsCount().then((response) => {
      setCount(response.unread);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <IconButton
        color="primary"
        aria-label="upload picture"
        onClick={handleClick}
      >
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
        <MenuItem className={classes.root}>
          <List>
            <ListItem>
              <Grid container style={{ justifyContent: "right" }} width="100%">
                <HighlightOffIcon onClick={handleClose} edge="end" />
              </Grid>
            </ListItem>
            <NotificationsList markOneAsRead={markOneAsRead} />
            <ListItem>
              <Button variant="contained" onClick={markAllRead} color="primary">
                Read All
              </Button>
            </ListItem>
          </List>
        </MenuItem>
      </Menu>
    </>
  );
}
