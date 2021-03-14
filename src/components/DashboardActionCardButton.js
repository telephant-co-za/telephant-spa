import React from 'react';
import { Fab, CardActions } from '@material-ui/core';

export default function DashboardActionCardButton({ icon, subform }) {
    const text = `${subform} Airtime`
    const link = `/airtime/${subform}`
    return (
        <CardActions style={{ justifyContent: 'center' }}>
            <Fab variant="extented" color="primary" style={{ width: '200px'}} href={link}>
                {icon}
                {text}
            </Fab>
        </CardActions>
    )
}