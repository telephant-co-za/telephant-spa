export const getContacts = () => {
  return fetch(`http://www.telephant.co.za/contacts.json`)
    .then((res) => res.json())
    .then((json) => json);
};

export const getBalance = () => {
  return fetch(`http://www.telephant.co.za/balance.json`).then((res) =>
    res.json()
  );
};

export const getTransactions = () => {
  return fetch(`/v1/transactions`, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.Mjc4Mjk1MjQwMzE.udr2pqWiHyVwfp3MwjbgpHSH7ZZzERRGqgzeDHqSVx4",
    },
    Accept: "application/json",
    "Content-Type": "application/json",
  }).then((res) => res.json());
};

export const login = async (username, password) => {
  const res = await fetch("https://localhost:3443/v1/users?action=login", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "post",
    body: JSON.stringify({ telephoneNumber: username, password: password }),
  });
  return res.json();
};

export const signup = async (username, password) => {
  const res = await fetch("https://localhost:3443/v1/users?action=signup", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "post",
    body: JSON.stringify({ telephoneNumber: username, password: password }),
  });
  return res.json();
};

export const apiMarkAllNotificationsRead = () => {
  return fetch(`/v1/notifications`, {
    method: "POST",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.Mjc4Mjk1MjQwMzE.udr2pqWiHyVwfp3MwjbgpHSH7ZZzERRGqgzeDHqSVx4",
    },
    Accept: "application/json",
    "Content-Type": "application/json",
  }).then((res) => res.json());
};

export const apiMarkOneNotificationRead = (id) => {
  return fetch(`/v1/notifications//` + id, {
    method: "POST",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.Mjc4Mjk1MjQwMzE.udr2pqWiHyVwfp3MwjbgpHSH7ZZzERRGqgzeDHqSVx4",
    },
    Accept: "application/json",
    "Content-Type": "application/json",
  }).then((res) => res.json());
};

export const getNotifications = () => {
  return fetch(`/v1/notifications`, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.Mjc4Mjk1MjQwMzE.udr2pqWiHyVwfp3MwjbgpHSH7ZZzERRGqgzeDHqSVx4",
    },
    Accept: "application/json",
    "Content-Type": "application/json",
  }).then((res) => res.json());
};

export const apiGetNotificationsCount = () => {
  return fetch(`/v1/notifications/count`, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.Mjc4Mjk1MjQwMzE.udr2pqWiHyVwfp3MwjbgpHSH7ZZzERRGqgzeDHqSVx4",
    },
    Accept: "application/json",
    "Content-Type": "application/json",
  }).then((res) => res.json());
};
