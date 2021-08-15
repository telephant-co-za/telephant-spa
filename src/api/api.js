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
  return fetch(`http://www.telephant.co.za/transactions.json`).then((res) =>
    res.json()
  );
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
