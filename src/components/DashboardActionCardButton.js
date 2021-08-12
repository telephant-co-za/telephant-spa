import React from 'react';
import { Fab, CardActions } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function DashboardActionCardButton({ icon, subform }) {
    const text = `${subform} Airtime`
    const link = `/airtime/${subform}`
    return (
        <CardActions style={{ justifyContent: 'center' }}>
            <Fab component={Link} to={link}  variant="extended" color="primary" style={{ width: '200px'}} href={link}>
                {icon}
                {text}
            </Fab>
        </CardActions>
    )
}