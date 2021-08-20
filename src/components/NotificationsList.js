import React from "react";
import { NotificationsContext } from "../contexts/NotificationsContext";
import { useContext } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import {
  zarDateTime,
  ReadOrNot,
  NotificationIcons,
} from "../functions/Formatting";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  notifications: {
    "&:hover": {
      backgroundColor: "#eee",
    },
  },
}));

export default function NotificationsList(props) {
  const context = useContext(NotificationsContext);
  const { markOneNotification, notifications } = context;
  const classes = useStyles();

  return notifications.map((notification, key) => {
    return (
      <ListItem
        onClick={() => {
          if (!notification.read) {
            props.markOneAsRead();
            markOneNotification(notification._id);
          }
        }}
        key={key}
        className={classes.notifications}
      >
        <ListItemAvatar>{ReadOrNot(notification.read)}</ListItemAvatar>
        <ListItemAvatar>{NotificationIcons(notification.type)}</ListItemAvatar>
        <ListItemText
          primary={notification.message}
          secondary={zarDateTime(notification.dateTime)}
        />
      </ListItem>
    );
  });
}
