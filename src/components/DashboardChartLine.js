import React from 'react';
import {Line} from 'react-chartjs-2';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import { LineChartPrep } from '../functions/LineChartPrep';


/*************** TILL HERE ******** */


export default function DashboardLineChart(props) {

  // STATIC DATA UNTIL CAN SORT OUT THE CONTEXT
// BREAKS THE TRANSACTIONS PAGE

const trans = [
  {
      "type": "TOPUP",
      "transactionID": "8he49vuc",
      "accountID": "60ebd53e2f79311541618bc6",
      "dateTime": "2021-05-05T12:12:00.000Z",
      "amount": 150,
      "description": "Account top up",
      "id": 1
  },
  {
      "type": "RECEIVE",
      "transactionID": "4g7hcv7",
      "accountID": "60ebd53e2f79311541618bc6",
      "dateTime": "2021-05-17T11:45:00.000Z",
      "amount": 10,
      "description": "Received credit",
      "id": 2
  },
  {
      "type": "SEND",
      "transactionID": "8q129bib",
      "accountID": "60ebd53e2f79311541618bc6",
      "dateTime": "2021-05-27T09:16:00.000Z",
      "amount": -100,
      "description": "Sending credit",
      "id": 3
  },
  {
      "type": "FEE",
      "transactionID": "8q129bib",
      "accountID": "60ebd53e2f79311541618bc6",
      "dateTime": "2021-05-27T09:16:00.000Z",
      "amount": -1,
      "description": "Sending fee",
      "id": 4
  },
  {
      "type": "TAX",
      "transactionID": "8q129bib",
      "accountID": "60ebd53e2f79311541618bc6",
      "dateTime": "2021-05-27T09:16:00.000Z",
      "amount": -0.15,
      "description": "VAT",
      "id": 5
  },
  {
      "type": "TAX",
      "transactionID": "2dguitrb",
      "accountID": "60ebd53e2f79311541618bc6",
      "dateTime": "2021-06-01T09:12:00.000Z",
      "amount": -0.15,
      "description": "VAT",
      "id": 6
  },
  {
      "type": "SEND",
      "transactionID": "2dguitrb",
      "accountID": "60ebd53e2f79311541618bc6",
      "dateTime": "2021-06-01T09:12:00.000Z",
      "amount": -10,
      "description": "Sending credit",
      "id": 7
  },
  {
      "type": "FEE",
      "transactionID": "2dguitrb",
      "accountID": "60ebd53e2f79311541618bc6",
      "dateTime": "2021-06-01T09:12:00.000Z",
      "amount": -1,
      "description": "Sending fee",
      "id": 8
  }
]

    let LineChartData = LineChartPrep(trans) 

    var config = 
      {
            datasets: [
                {
                    label: "Account Balance",
                    data: LineChartData,
                    fill: true,
                    borderColor: 'orange'
                }
            ]
        }

    return (
    <Card style={{height: '150'}}>
        <CardHeader title="Balance Movement" align="center" />
            <CardContent>
                <Line
                    data={config}
                    />
            </CardContent>
    </Card>
    );
  }
