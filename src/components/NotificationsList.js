import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

import InfoIcon from "@material-ui/icons/Info";
import DefaultIcon from "@material-ui/icons/Help";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CancelIcon from "@material-ui/icons/Cancel";

import { green } from "@material-ui/core/colors";
import { red } from "@material-ui/core/colors";
import { blue } from "@material-ui/core/colors";

function zarDateTime(value) {
  return datetimeFormatter.format(parseISOString(value));
}

const datetimeFormatter = new Intl.DateTimeFormat("en-GB", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

function parseISOString(s) {
  // Grid passing in undefined values and breaking so exclude undefined
  if (typeof s != "undefined") {
    var b = s.split(/\D+/);
    return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
  }
}

function Icon(value) {
  switch (value) {
    case "INFO":
      return <InfoIcon style={{ color: blue[500] }} />;
    case "REQUEST":
      return <RecentActorsIcon style={{ color: blue[500] }} />;
    default:
      return <DefaultIcon />;
  }
}

function ReadOrNot(value) {
  switch (value) {
    case true:
      return <CheckBoxIcon style={{ color: green[500] }} />;
    case false:
      return <CancelIcon style={{ color: red[500] }} />;
    default:
      return <DefaultIcon />;
  }
}

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
        <ListItemAvatar>{Icon(notification.type)}</ListItemAvatar>
        <ListItemText
          primary={notification.message}
          secondary={zarDateTime(notification.dateTime)}
        />
      </ListItem>
    );
  });
}
