import React, { useState, useEffect } from "react";
import {
  getNotifications,
  apiMarkAllNotificationsRead,
  apiMarkOneNotificationRead,
} from "../api/api";

export const NotificationsContext = React.createContext(null);

const NotificationsContextProvider = (props) => {
  const [notifications, setNotifications] = useState([]);

  const markAllNotificationsRead = () => {
    apiMarkAllNotificationsRead();
    setNotifications((notifications) => {
      notifications.forEach((n) => {
        n.read = true;
      });
      return notifications;
    });
  };

  const markOneNotification = (id) => {
    let i = notifications.findIndex((notification) => notification._id === id);
    notifications[i].read = true;
    apiMarkOneNotificationRead(id);
  };

  useEffect(() => {
    getNotifications().then((response) => {
      setNotifications(response.results);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NotificationsContext.Provider
      value={{
        notifications: notifications,
        markAllNotificationsRead: markAllNotificationsRead,
        markOneNotification: markOneNotification,
      }}
    >
      {props.children}
    </NotificationsContext.Provider>
  );
};

export default NotificationsContextProvider;
