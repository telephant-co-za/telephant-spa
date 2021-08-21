import React, { useState } from "react";
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
import Draggable from "react-draggable";
import { makeStyles } from "@material-ui/core/styles";

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
  let label;
  if (firstName) {
    label = firstName + " ";
  }
  if (lastName) {
    label = label + lastName + " ";
  }

  return label;
}

const ContactCard = (props) => {
  const classes = useStyles();
  const [editing, setEditing] = useState(false);

  const contact = props.contact;
  const num = props.num+1;

  // NOTE: I am not going to implement uploading pictures to the S3 bucket
  // These are static pictures pulled from an S3 bucket where www.telephant.co.za is hosted
  // Running out of time to implement this
  
  function linkToPic(key){
      const link = 'http://www.telephant.co.za/faces/'+num+'.jpeg'
      console.log(link)
      return link
  }

  return (
    <Draggable bounds="parent" key={num}>
      <Box m={1} minWidth={1 / 5}>
        <Grid>
          <Card maxWidth="100px">
            <CardContent>
              {editing ? (
                <>
                  <TextField
                    name="firstName"
                    defaultValue={contact.firstName}
                  />
                  <TextField name="LastName" defaultValue={contact.lastName} />
                </>
              ) : (
                <CardHeader
                  title={makeName(contact.firstName, contact.lastName)}
                  titleTypographyProps={{ variant: "h5" }}
                  avatar={
                    <Avatar
                      className={classes.large}
                      alt={makeName(contact.firstName, contact.lastName)}
                      src={linkToPic(props.key)}
                    />
                  }
                />
              )}
              <List>
                {contact.telephoneNumber || editing ? (
                  <ListItem>
                    <ListItemIcon>
                      <PhoneIcon color="#f44336" />
                    </ListItemIcon>
                    {editing ? (
                      <TextField
                        name="telephoneNumber"
                        defaultValue={contact.telephoneNumber}
                      />
                    ) : (
                      <ListItemText primary={contact.telephoneNumber} />
                    )}
                  </ListItem>
                ) : (
                  <></>
                )}
                {contact.email || editing ? (
                  <ListItem>
                    <ListItemIcon>
                      <EmailIcon />
                    </ListItemIcon>
                    {editing ? (
                      <TextField name="email" defaultValue={contact.email} />
                    ) : (
                      <ListItemText primary={contact.email} />
                    )}
                  </ListItem>
                ) : (
                  <></>
                )}
              </List>
              <CardActions>
                <IconButton aria-label="delete" color="primary">
                  <DeleteIcon />
                </IconButton>
                <IconButton
                  aria-label="edit"
                  color="primary"
                  onClick={(e) => setEditing(!editing)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  aria-label="save"
                  color="primary"
                  disabled={editing ? false : true}
                >
                  <SaveIcon />
                </IconButton>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
      </Box>
    </Draggable>
  );
};

export default ContactCard;
