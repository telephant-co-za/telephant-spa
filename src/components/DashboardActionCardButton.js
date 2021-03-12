import React from 'react';
import { Fab, CardActions } from '@material-ui/core';
import CreditCardIcon from '@material-ui/icons/CreditCard';

export default function DashboardActionCardButton({ text, icon }) {
    return (
        <CardActions style={{ justifyContent: 'center' }}>
            <Fab variant="extented" color="primary" style={{ width: '200px'}}>
                {icon}
                {text}
            </Fab>
        </CardActions>
    )
}