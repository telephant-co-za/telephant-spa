import React from "react";
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
import axios from "axios";
import NotificationsList from "./NotificationsList";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

export default function HeaderNotificationsButtonMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const markAllRead = () => {
    console.log("Mark all as read!!!");
  };

  const [count, setCount] = useState([]);

  useEffect(() => {
    axios.get("http://www.telephant.co.za/count.json").then((response) => {
      setCount(response.data.unread);
    });
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
        <MenuItem>
          <List>
            <ListItem>
              <Grid container style={{ justifyContent: "right" }} width="100%">
                <HighlightOffIcon onClick={handleClose} edge="end" />
              </Grid>
            </ListItem>
            <NotificationsList />
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
