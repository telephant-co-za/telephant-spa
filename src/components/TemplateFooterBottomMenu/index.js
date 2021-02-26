import React from 'react';
import { Container } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { AppBar } from '@material-ui/core'
import { Link } from '@material-ui/core'

export default function TemplateFooterBottomMenu() {
    return (
        <AppBar position="static" color="primary">
          <Container maxWidth="md">
            <Toolbar>
                <Typography variant="body1" color="inherit">
                    &copy; 2021 Telephant Holdings (Pty) Ltd
                    <Link href="#" color="inherit">Usage Terms</Link>
                    <Link href="#" color="inherit">Privacy Policy</Link>
                    <Link href="#" color="inherit">Terms &amp; Conditions</Link>
                </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}