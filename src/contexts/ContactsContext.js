import React, { useState, useEffect } from "react";
import { getContacts } from "../api/api";

export const ContactsContext = React.createContext(null);

const ContactsContextProvider = (props) => {

const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts().then(response => {
    setContacts(response.results);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  return (
    <ContactsContext.Provider
      value={{
        contacts: contacts
      }}
    >
      {props.children}
    </ContactsContext.Provider>
  );
};

export default ContactsContextProvider;