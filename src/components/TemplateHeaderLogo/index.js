import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

export default function TemplateHeaderLogo() {
    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        React &amp; Material-UI Sample Application
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}