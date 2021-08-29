import React from "react";
import { Grid, Paper, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Iframe from "react-iframe";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function PageVideo() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Paper>
            <Box p={3}>
              <Iframe
                url="http://www.youtube.com/embed/xDMP3i36naA"
                width="100%"
                display="initial"
                position="relative"
                height="500px"
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
