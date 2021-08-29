import React from "react";
import {
  Grid,
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Iframe from "react-iframe";
import img1 from "../img/1.jpeg";
import img2 from "../img/2.jpeg";
import img3 from "../img/3.jpeg";
import img4 from "../img/4.jpeg";
import img5 from "../img/5.jpeg";
import img6 from "../img/6.jpeg";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function PageAbout() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Iframe
            url="http://www.telephant.co.za"
            width="100%"
            display="initial"
            position="relative"
            height="1000px"
          />
        </Grid>
      </Grid>
    </div>
  );
}
