// React
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, CssBaseline } from "@material-ui/core";

// Custom
import FooterSocialLinks from "./FooterSocialLinks";
import FooterCopyrightNotice from "./FooterCopyrightNotice";

// Make styles
const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor: "white",
  },
}));

// THE COMPONENT
export default function FooterLayout() {
  const classes = useStyles();

  // Main stuff
  return (
    <>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth="sm" align="center">
          <FooterSocialLinks />
          <FooterCopyrightNotice />
        </Container>
      </footer>
    </>
  );
}
