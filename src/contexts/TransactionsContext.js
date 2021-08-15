import React, { useState, useEffect } from "react";
import { getTransactions } from "../api/api";

export const TransactionsContext = React.createContext(null);

const TransactionsContextProvider = (props) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions().then((response) => {
      setTransactions(response.results);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TransactionsContext.Provider
      value={{
        transactions: transactions,
      }}
    >
      {props.children}
    </TransactionsContext.Provider>
  );
};

export default TransactionsContextProvider;
