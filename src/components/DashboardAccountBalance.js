import React from 'react';
import { Link, Typography, Grid, Card, CardHeader, CardContent, CardActions, Box } from '@material-ui/core';
import { sizing } from '@material-ui/system';

export default function DashboardAccountBalance() {

    return (
        <Card style={{height: '100%'}}>
            <CardHeader title="Your account balance is" align="center" />
            <CardContent>
                <Typography variant="h2" align="center" color="primary" noWrap="true">R 123.03</Typography>
            </CardContent>
            <CardActions>
                <Typography>
                    <Link href="/transactions" variant="subtitle">Transactions...</Link>
                </Typography>                
            </CardActions>
        </Card>
    );
} 