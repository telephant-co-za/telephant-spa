import React, { useState, useEffect, useContext } from "react";
import { getTransactions } from "../api/api";
import { AuthContext } from "./AuthenticationContext";

export const TransactionsContext = React.createContext(null);

const TransactionsContextProvider = (props) => {
  const [transactions, setTransactions] = useState([]);

  const context = useContext(AuthContext);
  const { isAuthenticated, refresh } = context;

  useEffect(() => {
    getTransactions().then((response) => {
      setTransactions(response.results);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, refresh]);

  function clearTransactions() {
    setTransactions({});
  }

  return (
    <TransactionsContext.Provider
      value={{
        transactions: transactions,
        clearTransactions: clearTransactions,
      }}
    >
      {props.children}
    </TransactionsContext.Provider>
  );
};

export default TransactionsContextProvider;
