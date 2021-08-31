import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Iframe from "react-iframe";

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
