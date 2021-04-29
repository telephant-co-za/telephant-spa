import * as React from 'react';
import { Paper, Table, TableCell, TableContainer, TableRow, Card, CardHeader, CardContent } from '@material-ui/core';
import { withRouter } from "react-router";

const TransactionDetail = props => {
  return (
    <Card>
      <CardHeader title='Transaction Detail' />
      <CardContent>
        <TableContainer component={Paper}>
          <Table>
            <TableRow>
             <TableCell variant="head">Transaction ID</TableCell>
              <TableCell>cJYXv14t0P</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">Transaction Type</TableCell>
              <TableCell>Deposit</TableCell>
              </TableRow>
              <TableRow>
              <TableCell variant="head">Date Time</TableCell>
              <TableCell>2020-03-25T12:16:44Z</TableCell>
              </TableRow>
              <TableRow>
              <TableCell variant="head">Amount</TableCell>
              <TableCell>100.00</TableCell>
              </TableRow>
            </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}

export default withRouter(TransactionDetail)