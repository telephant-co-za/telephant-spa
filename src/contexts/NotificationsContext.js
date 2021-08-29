import React, { useState, useEffect, useContext } from "react";
import {
  getNotifications,
  apiMarkAllNotificationsRead,
  apiMarkOneNotificationRead,
} from "../api/api";
import { AuthContext } from "./AuthenticationContext";

export const NotificationsContext = React.createContext(null);

const NotificationsContextProvider = (props) => {
  const [notifications, setNotifications] = useState([]);

  const context = useContext(AuthContext);
  const { isAuthenticated, refresh } = context;

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
  }, [isAuthenticated, refresh]);

  const clearNotifications = () => {
    setNotifications("");
  };

  return (
    <NotificationsContext.Provider
      value={{
        notifications: notifications,
        markAllNotificationsRead: markAllNotificationsRead,
        markOneNotification: markOneNotification,
        clearNotifications: clearNotifications,
      }}
    >
      {props.children}
    </NotificationsContext.Provider>
  );
};

export default NotificationsContextProvider;
