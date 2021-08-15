// Adapted from here:
// https://www.carlrippon.com/react-drop-down-data-binding/
// Implemented contacts contexts into this

import React from "react";
import { useContext } from "react";
import { ContactsContext } from "../contexts/ContactsContext";

function MakeLabel(firstName, lastName, telephoneNumber) {
  let label;
  if (firstName) {
    label = firstName + " ";
  }
  if (lastName) {
    label = label + lastName + " ";
  }
  label = label + "(" + telephoneNumber + ")";

  return label;
}

function WidgetDropDownContact() {
  const [loading, setLoading] = React.useState(true);
  const [items, setItems] = React.useState([]);
  const [value, setValue] = React.useState("R2-D2");

  const context = useContext(ContactsContext);
  const { contacts } = context;

  React.useEffect(() => {
    let unmounted = false;

    async function getContacts() {
      const body = contacts;
      if (!unmounted) {
        setItems(
          body.map(({ firstName, lastName, telephoneNumber }) => ({
            label: MakeLabel(firstName, lastName, telephoneNumber),
            value: telephoneNumber,
          }))
        );
        setLoading(false);
      }
    }
    getContacts();
    return () => {
      unmounted = true;
    };
  }, [contacts]);

  const style = {
    border: 0,
    outline: 0,
  };

  return (
    <select
      style={style}
      disabled={loading}
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
    >
      {items.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}

export default function ContactsDropDown() {
  return WidgetDropDownContact();
}
