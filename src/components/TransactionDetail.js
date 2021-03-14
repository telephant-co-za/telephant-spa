import * as React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Card, CardHeader, CardContent, Typography} from '@material-ui/core';
import { withRouter } from "react-router";

// Note rename Icons to make easier to match to Actions
import BuyIcon from '@material-ui/icons/CreditCard';
import UseIcon from '@material-ui/icons/PhoneInTalk';
import SendIcon from '@material-ui/icons/Send';
import ReceiveIcon from '@material-ui/icons/CallReceived'
import DefaultIcon from '@material-ui/icons/Help'  // Shouldn't show
import WithdrawIcon from '@material-ui/icons/LocalAtm';

const currencyFormatter = new Intl.NumberFormat('en-ZA', {
  style: 'currency',
  currency: 'ZAR',
});

const datetimeFormatter = new Intl.DateTimeFormat('en-GB', {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
});

function parseISOString(s) {
  // Grid passing in undefined values and breaking so exclude undefined
  if (typeof s != 'undefined') {
    var b = s.split(/\D+/);
    return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
  }

}

const zarPrice = {
  type: 'number',
  valueFormatter: ({ value }) => currencyFormatter.format(Number(value)),
};

const zarDateTime = {
  type: 'dateTime',
  valueFormatter: ({ value }) => datetimeFormatter.format(parseISOString(value)),
};

function getIcon(params: ValueGetterParams) {
  switch (params.getValue('type')) {
    case 'Deposit': // Buy
      return <><BuyIcon /><Typography style={{ marginLeft: '3px' }} variant='subtitle2'>Buy</Typography></>
    case 'Conversion': // Use
      return <><UseIcon /><Typography style={{ marginLeft: '3px' }} variant='subtitle2'>Use</Typography></>
    case 'Transfer': // Send
      return <><SendIcon /><Typography style={{ marginLeft: '3px' }} variant='subtitle2'>Send</Typography></>
    case 'Received': // Receive
      return <><ReceiveIcon /><Typography style={{ marginLeft: '3px' }} variant='subtitle2'>Receive</Typography></>
    case 'Withdraw': // Withdraw
      return <><WithdrawIcon /><Typography style={{ marginLeft: '3px' }} variant='subtitle2'>Withdraw</Typography></>
    default: // Default
      return <><DefaultIcon /><Typography style={{ marginLeft: '3px' }} variant='subtitle2'>Unknown</Typography></>
  }
}

const row = [
  { id: 'cJYXv14t0P', icon: 1, type: 'Deposit', timestamp: '2020-03-25T12:16:44Z', amount: 100.00 },
];


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