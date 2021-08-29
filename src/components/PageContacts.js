// Won't put confirmation snackbars on this interface
// because there are already confirmation messages
// Leads to too much consuion for the user

import React, { useState, useContext } from "react";
import {
  Grid,
  Box,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  CardActions,
  Avatar,
  IconButton,
  TextField,
} from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import SaveIcon from "@material-ui/icons/Save";
import NewIcon from "@material-ui/icons/AddCircleOutline";
import Draggable from "react-draggable";

import { ContactsContext } from "../contexts/ContactsContext";
import { AuthContext } from "../contexts/AuthenticationContext";
import { makeStyles } from "@material-ui/core/styles";
import { useConfirm } from "material-ui-confirm";
import { ObjectID } from "bson";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function makeName(firstName, lastName) {
  let label = "";
  if (firstName) {
    label = firstName + " ";
  }
  if (lastName) {
    label = label + lastName + " ";
  }

  return label;
}

const PageContacts = (props) => {
  const context = useContext(ContactsContext);
  const context2 = useContext(AuthContext);
  const { contacts, updateContact, deleteContact, addContact } = context;
  const { username } = context2;
  const confirm = useConfirm();
  const classes = useStyles();
  const [card, setCard] = useState(0);
  const [add, setAdd] = useState(false);

  // NOTE: I am not going to implement uploading pictures to the S3 bucket
  // These are static pictures pulled from an S3 bucket where www.telephant.co.za is hosted
  // Running out of time to implement this

  function linkToPic(id, firstName) {
    const link = "http://www.telephant.co.za/faces/" + id + ".jpeg";
    return link;
  }

  const handleDelete = (id) => {
    confirm({
      description: "Please confirm that you want to delete your contact!",
    })
      .then(() => {
        deleteContact(id);
      })
      .catch(() => {
        console.log("Catch event");
      });
  };

  function handleUpdate(key) {
    confirm({
      description: "Please confirm that you want to update your contact!",
    })
      .then(() => {
        const updateObject = {
          _id: document.getElementById("_id-" + key).value,
          telephoneNumber: document.getElementById("telephoneNumber-" + key)
            .value,
          firstName: document.getElementById("firstName-" + key).value,
          lastName: document.getElementById("lastName-" + key).value,
          email: document.getElementById("email-" + key).value,
          owner: document.getElementById("owner-" + key).value,
        };
        const result = updateContact(key, updateObject);
        setCard(0);
        confirm({
          description: { result },
        });
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleAdd() {
    confirm({
      description: "Please confirm that you want to add this contact!",
    })
      .then(() => {
        let genid = new ObjectID();
        genid = genid.toString();

        const addObject = {
          _id: genid,
          telephoneNumber: document.getElementById("TelephoneNumber").value,
          firstName: document.getElementById("FirstName").value,
          lastName: document.getElementById("LastName").value,
          email: document.getElementById("Email").value,
          owner: username,
        };

        addContact(addObject);
        setAdd(false);
      })
      .catch(() => {
        console.log("Catch event");
      });
  }

  return (
    <Box p={2} m={2}>
      <IconButton
        aria-label="save"
        color="primary"
        onClick={(e) => {
          if (add === false) {
            setAdd(true);
            setCard(0);
          } else {
            setAdd(false);
          }
        }}
      >
        <NewIcon />
      </IconButton>

      <Grid container spacing={3}>
        {add ? (
          <Draggable bounds="parent">
            <Box m={1} minWidth={1 / 5}>
              <Grid>
                <Card>
                  <CardContent>
                    <form>
                      <TextField
                        label="First Name"
                        component="ListItemText"
                        id="FirstName"
                      />
                      <br />
                      <TextField
                        label="Last Name"
                        component="ListItemText"
                        id="LastName"
                      />
                      <br />

                      <List>
                        <ListItem>
                          <ListItemIcon>
                            <PhoneIcon />
                          </ListItemIcon>
                          <TextField
                            component="ListItemText"
                            id="TelephoneNumber"
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <EmailIcon />
                          </ListItemIcon>
                          <TextField component="ListItemText" id="Email" />
                        </ListItem>
                      </List>
                      <CardActions>
                        <IconButton
                          aria-label="save"
                          color="primary"
                          onClick={(e) => {
                            handleAdd();
                          }}
                        >
                          <SaveIcon />
                        </IconButton>
                      </CardActions>
                    </form>
                  </CardContent>
                </Card>
              </Grid>
            </Box>
          </Draggable>
        ) : (
          <></>
        )}
        {contacts.map((contact, key) => {
          key = key + 1;
          return (
            <Draggable bounds="parent" key={key}>
              <Box m={1} minWidth={1 / 5}>
                <Grid>
                  <Card>
                    <CardContent>
                      <form id={key}>
                        <input
                          type="hidden"
                          value={contact._id}
                          id={"_id-" + key}
                        />
                        <input
                          type="hidden"
                          value={contact.owner}
                          id={"owner-" + key}
                        />
                        {card === key ? (
                          <>
                            <TextField
                              label="First Name"
                              component="ListItemText"
                              defaultValue={contact.firstName}
                              id={"firstName-" + key}
                            />
                            <br />
                          </>
                        ) : (
                          <></>
                        )}
                        {card === key ? (
                          <>
                            <TextField
                              label="Last Name"
                              component="ListItemText"
                              defaultValue={contact.lastName}
                              id={"lastName-" + key}
                            />
                            <br />
                          </>
                        ) : (
                          <></>
                        )}
                        {card !== key ? (
                          <CardHeader
                            title={makeName(
                              contact.firstName,
                              contact.lastName
                            )}
                            titleTypographyProps={{ variant: "h5" }}
                            avatar={
                              <Avatar
                                className={classes.large}
                                alt={makeName(
                                  contact.firstName,
                                  contact.lastName
                                )}
                                src={linkToPic(contact._id, contact.firstName)}
                              />
                            }
                          />
                        ) : (
                          <></>
                        )}
                        <List>
                          <ListItem>
                            <ListItemIcon>
                              <PhoneIcon />
                            </ListItemIcon>
                            {/* Not possible to edit a contact's telephone number on API */}
                            <ListItemText primary={contact.telephoneNumber} />
                            <input
                              type="hidden"
                              value={contact.telephoneNumber}
                              id={"telephoneNumber-" + key}
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <EmailIcon />
                            </ListItemIcon>
                            {card === key ? (
                              <TextField
                                component="ListItemText"
                                defaultValue={contact.email}
                                id={"email-" + key}
                              />
                            ) : (
                              <></>
                            )}
                            {card !== key ? (
                              <ListItemText primary={contact.email} />
                            ) : (
                              <></>
                            )}
                          </ListItem>
                        </List>
                        <CardActions>
                          <IconButton
                            aria-label="delete"
                            color="primary"
                            onClick={(e) => handleDelete(contact._id)}
                          >
                            <DeleteIcon />
                          </IconButton>
                          <IconButton
                            aria-label="edit"
                            color="primary"
                            onClick={(e) => {
                              if (card > 0) {
                                setCard(0);
                              } else {
                                setCard(key);
                              }
                            }}
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            aria-label="save"
                            color="primary"
                            disabled={card === key ? false : true}
                            onClick={(e) => {
                              handleUpdate(key);
                            }}
                          >
                            <SaveIcon />
                          </IconButton>
                        </CardActions>
                      </form>
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

export default PageContacts;
