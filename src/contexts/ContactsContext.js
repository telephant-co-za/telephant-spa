import React, { useState, useEffect, useContext } from "react";
import {
  apiGetContacts,
  apiDeleteContact,
  apiUpdateContact,
  apiAddContact,
} from "../api/api";
import { AuthContext } from "./AuthenticationContext";

export const ContactsContext = React.createContext(null);

const ContactsContextProvider = (props) => {
  const [contacts, setContacts] = useState([]);

  const context = useContext(AuthContext);
  const { isAuthenticated } = context;

  useEffect(() => {
    apiGetContacts().then((response) => {
      setContacts(response.results);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const deleteContact = (id) => {
    // frontend
    const newContacts = contacts.filter((contact) => contact._id !== id);
    setContacts(newContacts);

    //apiDeleteContact(id)
  };

  const updateContact = (key, updateObject) => {
    // frontend
    contacts[key - 1] = updateObject;

    // backend
    apiUpdateContact(updateObject);
  };

  const addContact = (addObject) => {
    // frontend

    let currentContacts = { ...contacts };

    setContacts([]);

    let newContacts = [];

    newContacts.push(addObject);

    for (const i in currentContacts) {
      newContacts.push(currentContacts[i]);
    }

    setContacts(newContacts);

    // backend
    apiAddContact(addObject);
  };

  const clearContacts = () => {
    return "hello";
  };

  return (
    <ContactsContext.Provider
      value={{
        contacts: contacts,
        deleteContact: deleteContact,
        updateContact: updateContact,
        addContact: addContact,
        clearContacts: clearContacts,
      }}
    >
      {props.children}
    </ContactsContext.Provider>
  );
};

export default ContactsContextProvider;
