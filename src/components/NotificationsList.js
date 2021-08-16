import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import {
  zarDateTime,
  ReadOrNot,
  NotificationIcons,
} from "../functions/Formatting";

export default function NotificationsList(props) {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    axios
      .get("http://www.telephant.co.za/notifications.json")
      .then((response) => {
        setNotifications(response.data.results);
      });
  }, []);

  return notifications.map((notification, key) => {
    return (
      <ListItem key={key}>
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
