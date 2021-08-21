import React, { useState } from "react";
import { Grid, Box } from "@material-ui/core";
import { useContext } from "react";
import { ContactsContext } from "../contexts/ContactsContext";
import ContactCard from "./ContactCard";

const PageContacts = (props) => {
  const context = useContext(ContactsContext);
  const { contacts } = context;

  return (
    <Box p={2} m={2}>
      <Grid container spacing={3}>
        {contacts.map((contact, key) => {
          let props = {
            contact: contact,
            num: key,
          };

          return <ContactCard {...props} />;
        })}
      </Grid>
    </Box>
  );
};

export default PageContacts;
