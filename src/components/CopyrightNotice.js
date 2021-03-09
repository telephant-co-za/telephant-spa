import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Make styles
const useStyles = makeStyles((theme) => ({
    copyright: {
        marginTop: '1em'
    },
  }));

export default function CopyrightNotice() {
    const classes = useStyles();

    return (
    <Typography variant="caption" className='footer' gutterTop>
        &copy; Copyright {new Date().getFullYear()}, <a target="_blank" href="https://www.telephantcloud.com">Telephant Cloud</a>
    </Typography>
    );
};