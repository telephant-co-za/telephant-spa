// ====== CONTACTS ======

export const apiGetContacts = () => {
  return fetch(`/v1/contacts?limit=100`, {
    method: "GET",
    headers: {
      Authorization: window.localStorage.getItem("token"),
    },
    Accept: "application/json",
    "Content-Type": "application/json",
  }).then((res) => res.json());
};

export const apiDeleteContact = (id) => {
  const link = "/v1/contacts" + id;

  return fetch(link, {
    method: "DELETE",
    headers: {
      Authorization: window.localStorage.getItem("token"),
    },
    Accept: "application/json",
    "Content-Type": "application/json",
  }).then((res) => res.json());
};

export const apiUpdateContact = (updateObject) => {
  const link = "/v1/contacts//" + updateObject._id;

  const updateBody = {
    // telephone number can't be updated on the API
    // telephoneNumber: updateObject.telephoneNumber,
    firstName: updateObject.firstName,
    lastName: updateObject.lastName,
    email: updateObject.email,
  };

  return fetch(link, {
    method: "PUT",
    body: JSON.stringify(updateBody),
    headers: {
      Authorization: window.localStorage.getItem("token"),
    },
    Accept: "application/json",
    "Content-Type": "application/json",
  }).then((res) => res.json());
};

export const apiAddContact = (addObject) => {
  const link = "/v1/contacts";

  let addBody = {
    _id: addObject._id,
    telephoneNumber: addObject.telephoneNumber,
    firstName: addObject.firstName,
    lastName: addObject.lastName,
    email: addObject.email,
    owner: addObject.owner,
  };

  addBody = JSON.stringify(addBody);

  return fetch(link, {
    method: "POST",
    headers: {
      Authorization: window.localStorage.getItem("token"),
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: addBody,
  }).then((res) => res.json());
};

// ====== TRANSACTIONS ======

export const getBalance = () => {
  return fetch(`/v1/airtime`, {
    method: "GET",
    headers: {
      Authorization: window.localStorage.getItem("token"),
    },
    Accept: "application/json",
    "Content-Type": "application/json",
  }).then((res) => res.json());
};

export const apiSendAirtime = (data) => {
  const link = "/v1/airtime";

  let sendBody = {
    accountName: data.contact.value,
    amount: data.amount,
  };

  sendBody = JSON.stringify(sendBody);

  return fetch(link, {
    method: "PUT",
    headers: {
      Authorization: window.localStorage.getItem("token"),
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: sendBody,
  }).then((res) => res.json());
};

export const apiRequestAirtime = (data) => {
  // This is a GET code because it would be possible to print QR Codes
  // And use them as labels on products in a shop
  // So for example a box of biscuits cost R10 the shop owner can preprint
  // labels and place them on the box.  The trader can scan the QR code
  // on checkout and create payment requests for the biscuits from the user
  // This a solution to Point of Sale system for the small trader

  const link = "/v1/airtime/" + data.contact.value + "/" + data.amount;

  return fetch(link, {
    method: "GET",
    headers: {
      Authorization: window.localStorage.getItem("token"),
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

export const getTransactions = () => {
  return fetch(`/v1/transactions?limit=200`, {
    method: "GET",
    headers: {
      Authorization: window.localStorage.getItem("token"),
    },
    Accept: "application/json",
    "Content-Type": "application/json",
  }).then((res) => res.json());
};

/* export const apiGetTransactionDetail = (id) => {
  return fetch(`/v1/transactions/` + id, {
    method: "GET",
    headers: {
      Authorization: window.localStorage.getItem("token"),
    },
    Accept: "application/json",
    "Content-Type": "application/json",
  }).then((res) => res.json());
}; */

export const apiGetTransactionDetail = (tx) => {
  return fetch("/v1/transactions/" + tx, {
    method: "GET",
    headers: {
      Authorization: window.localStorage.getItem("token"),
    },
    Accept: "application/json",
    "Content-Type": "application/json",
  }).then((response) => response.json());
};

export const apiUseAirtime = (data) => {
  let sendBody = {
    amount: data.amount,
  };

  sendBody = JSON.stringify(sendBody);

  return fetch(`/v1/airtime`, {
    body: sendBody,
    method: "POST",
    headers: {
      Authorization: window.localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
    Accept: "application/json",
  }).then((res) => res.json());
};

// ====== NOTIFICATIONS ======

export const apiMarkAllNotificationsRead = () => {
  return fetch(`/v1/notifications`, {
    method: "POST",
    headers: {
      Authorization: window.localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
    Accept: "application/json",
  }).then((res) => res.json());
};

export const apiMarkOneNotificationRead = (id) => {
  return fetch(`/v1/notifications//` + id, {
    method: "POST",
    headers: {
      Authorization: window.localStorage.getItem("token"),
    },
    Accept: "application/json",
    "Content-Type": "application/json",
  }).then((res) => res.json());
};

export const getNotifications = () => {
  return fetch(`/v1/notifications`, {
    method: "GET",
    headers: {
      Authorization: window.localStorage.getItem("token"),
    },
    Accept: "application/json",
    "Content-Type": "application/json",
  }).then((res) => res.json());
};

export const apiGetNotificationsCount = () => {
  return fetch(`/v1/notifications/count`, {
    method: "GET",
    headers: {
      Authorization: window.localStorage.getItem("token"),
    },
    Accept: "application/json",
    "Content-Type": "application/json",
  }).then((res) => res.json());
};

// ====== AUTHENTICATION ======

export const login = async (username, password) => {
  const res = await fetch("/v1/users?action=login", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "post",
    body: JSON.stringify({ telephoneNumber: username, password: password }),
  });
  return res.json();
};

export const signup = async (username, password) => {
  const res = await fetch("/v1/users?action=signup", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "post",
    body: JSON.stringify({ telephoneNumber: username, password: password }),
  });
  return res.json();
};
