import React from 'react';
import { Grid, Box, Card, CardContent, CardHeader, List, ListItem, CardActions } from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import SendIcon from '@material-ui/icons/Send';
import { useContext } from "react";
import { ContactsContext } from "../contexts/ContactsContext";
import Draggable from 'react-draggable';

function makeName(firstName, lastName)
{
    let label
    if (firstName){
        label = firstName + ' '
    }
    if (lastName){
        label = label + lastName + ' '
    }

    return label
}

const Contacts = (props) => {

    const context = useContext(ContactsContext);
    const { contacts } = context;

    return (
      <Box  p={2}>
        <Grid container spacing={3}>
          {contacts.map((contact, key) => {
            return (
            <Draggable bounds="parent">
              <Box m={1} minWidth={1/5}>
              <Grid>
              <Card>
                  <CardContent>
                      <CardHeader title={makeName(contact.firstName, contact.lastName)}/>
                      <List>
                          <ListItem>
                              <ListItemIcon>
                                  <PhoneIcon />
                              </ListItemIcon>
                              <ListItemText primary={contact.telephoneNumber} />
                          </ListItem>
                          <ListItem>
                              <ListItemIcon>
                                  <EmailIcon />
                              </ListItemIcon>
                              <ListItemText primary={contact.email} />
                          </ListItem>
                      </List>
                      <CardActions>
                          <Button variant="outlined" startIcon={<DeleteIcon />}>
                              Delete
                          </Button>
                          <Button variant="outlined" startIcon={<EditIcon />}>
                              Edit
                          </Button>
                      </CardActions>
                      <CardActions>
                          <Button variant="outlined" startIcon={<SendIcon />}>
                              Send
                          </Button>
                      </CardActions>
                  </CardContent>
              </Card>
          </Grid>
          </Box>
        </Draggable>
            );
          })}
        </Grid>
      </Box>
    );
  };

  export default Contacts;