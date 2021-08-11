// Adapted from here:
// https://www.carlrippon.com/react-drop-down-data-binding/

import React from 'react';

function MakeLabel(firstName, lastName, telephoneNumber)
{
    let label
    if (firstName){
        label = firstName + ' '
    }
    if (lastName){
        label = label + lastName + ' '
    }
    label = label + '(' + telephoneNumber + ')'

    return label
}

function ContactDropDown() {
    const [loading, setLoading] = React.useState(true);
    const [items, setItems] = React.useState([]);
    const [value, setValue] = React.useState("R2-D2");
    React.useEffect(() => {
      let unmounted = false;
      async function getContacts() {
        const response = await fetch(
          "http://www.telephant.co.za/contacts.json"
        );
        const body = await response.json();
        if (!unmounted) {
          setItems(
            body.results.map(({ firstName, lastName, telephoneNumber }) => ({ label: MakeLabel(firstName, lastName, telephoneNumber), value: telephoneNumber }))
          );
          setLoading(false);
        }
      }
      getContacts();
      return () => {
        unmounted = true;
      };
    }, []);

    const style = {
        border:0,
        outline:0
    }
  
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

export default function ContactsDropDown() 
{
    return ContactDropDown()
}