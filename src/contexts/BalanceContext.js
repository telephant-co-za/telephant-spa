import React, { useState, useEffect, useContext } from "react";
import { getBalance } from "../api/api";
import { AuthContext } from "./AuthenticationContext";

export const BalanceContext = React.createContext(null);

const BalanceContextProvider = (props) => {
  const [balance, setBalance] = useState([]);

  // Note the loading of data was coming after the login
  // The way to solve turned out to make the other contexts
  // dependent on the isAuthenticated function in the auth
  // context - so that once login occured the context would reload
  // the api data and therefore remake the dependent componets
  // PHEW!!

  const context = useContext(AuthContext);
  const { isAuthenticated } = context;

  useEffect(() => {
    getBalance().then((response) => {
      setBalance(response.balance);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  function clearBalance() {
    setBalance({});
  }

  return (
    <BalanceContext.Provider
      value={{
        balance: balance,
        clearBalance: clearBalance,
      }}
    >
      {props.children}
    </BalanceContext.Provider>
  );
};

export default BalanceContextProvider;
