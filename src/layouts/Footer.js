// React
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// Custom
import SocialLinks from '../components/SocialLinks';
import CopyrightNotice from '../components/CopyrightNotice'

// Make styles
const useStyles = makeStyles((theme) => ({
    footer: {
      padding: theme.spacing(3, 2),
      marginTop: 'auto',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
  }));
  
// THE COMPONENT
  export default function Footer() {
    const classes = useStyles();

// Main stuff  
    return (
        <>
            <CssBaseline />
                <footer className={classes.footer}>
                    <Container maxWidth="sm" align="center">
                        <SocialLinks />
                        <CopyrightNotice />
                    </Container>
                </footer>
        </>
    );
  }
