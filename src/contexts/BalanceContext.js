import React, { useState, useEffect } from "react";
import { getBalance } from "../api/api";

export const BalanceContext = React.createContext(null);

const BalanceContextProvider = (props) => {

const [balance, setBalance] = useState([]);

  useEffect(() => {
    getBalance().then(response => {
    setBalance(response.balance);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  return (
    <BalanceContext.Provider
      value={{
        balance: balance
      }}
    >
      {props.children}
    </BalanceContext.Provider>
  );
};

export default BalanceContextProvider;