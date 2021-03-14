import React from 'react';
import { Button, Typography, Card, CardHeader, CardContent, CardActions, Box } from '@material-ui/core';

export default function DashboardAccountBalance() {

    return (
        <Card style={{height: '100%'}}>
            <CardHeader title="Your account balance is" align="center" />
            <CardContent>
                <Typography variant="h2" align="center" color="primary" noWrap>R 123.03</Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
                <Box mt={3}>
                    <Button variant="contained" color="primary">
                          Transactions...
                    </Button>
                </Box>
            </CardActions>
        </Card>
    );
} 