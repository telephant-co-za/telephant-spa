import React from 'react';
import { Button, Typography, Card, CardHeader, CardContent, CardActions, Box } from '@material-ui/core';
import axios from 'axios'
import {useEffect, useState} from "react";
import { Link as RouterLink } from 'react-router-dom';

function formatZAR(value){
const currencyFormatter = new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
  });

  return currencyFormatter.format(Number(value))
}



export default function DashboardAccountBalance() {

    const [balance, setCount] = useState([])

    useEffect(() => {
      axios
        .get('http://www.telephant.co.za/balance.json')
        .then(response => {
          setCount(response.data.balance)
        })
    }, [])

    return (
        <Card style={{height: '100%'}}>
            <CardHeader title="Your account balance is" align="center" />
            <CardContent>
                <Typography variant="h2" align="center" color="primary" noWrap>{formatZAR(balance)}</Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
                <Box mt={3}>
                    <Button variant="contained" color="primary" component={RouterLink} to="/transactions">
                        Transactions...
                    </Button>
                </Box>
            </CardActions>
        </Card>
    );
} 