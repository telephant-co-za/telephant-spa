import React from 'react';
import { Button, Typography, Card, CardHeader, CardContent, CardActions, Box } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { BalanceContext } from "../contexts/BalanceContext";
import { useContext } from "react";

function formatZAR(value){
const currencyFormatter = new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
  });

  return currencyFormatter.format(Number(value))
}

export default function DashboardAccountBalance() {

    const context = useContext(BalanceContext);
    const { balance } = context;

    return (
        <Card style={{height: '100%'}}>
            <CardHeader title="Your account balance is" align="center" />
            <CardContent>
             
                <Typography variant="h2" align="center" color="primary" noWrap>{formatZAR(balance)}</Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
                <Box mt={3}>
                    <Button variant="contained" color="primary" component={RouterLink} to="transactions">
                        Transactions...
                    </Button>
                </Box>
            </CardActions>
        </Card>
    );
} 