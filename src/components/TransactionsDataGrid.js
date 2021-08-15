import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// Note rename Icons to make easier to match to Actions
import BuyIcon from '@material-ui/icons/CreditCard';
import UseIcon from '@material-ui/icons/PhoneInTalk';
import SendIcon from '@material-ui/icons/Send';
import ReceiveIcon from '@material-ui/icons/CallReceived'
import DefaultIcon from '@material-ui/icons/Help'  // Shouldn't show
import TopupIcon from '@material-ui/icons/LocalAtm';
import TransactionsDetail from './TransactionsDetail'
import TaxIcon from '@material-ui/icons/AccountBalance';
import FeeIcon from '@material-ui/icons/AttachMoney';

import { useContext } from "react";
import { TransactionsContext } from "../contexts/TransactionsContext";

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
    if (typeof s != 'undefined')
    {
      var b = s.split(/\D+/);
      return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
    }

};

function Icon(value) {
  switch(value) {
    case 'DEPOSIT': 
      return <><BuyIcon /><Typography style={{marginLeft: '3px'}} variant='subtitle2'>Buy</Typography></>
      case 'TAX': 
      return <><TaxIcon /><Typography style={{marginLeft: '3px'}} variant='subtitle2'>Tax</Typography></>
    case 'CONVERT': 
      return <><UseIcon /><Typography style={{marginLeft: '3px'}} variant='subtitle2'>Use</Typography></>
    case 'SEND': 
        return <><SendIcon /><Typography style={{marginLeft: '3px'}} variant='subtitle2'>Send</Typography></>
    case 'RECEIVE': 
      return <><ReceiveIcon /><Typography style={{marginLeft: '3px'}} variant='subtitle2'>Receive</Typography></>
    case 'FEE': 
      return <><FeeIcon /><Typography style={{marginLeft: '3px'}} variant='subtitle2'>Fee</Typography></>
    case 'TOPUP': 
      return <><TopupIcon /><Typography style={{marginLeft: '3px'}} variant='subtitle2'>Top Up</Typography></>
      default: 
      return <><DefaultIcon /><Typography style={{marginLeft: '3px'}} variant='subtitle2'>Unknown</Typography></>
  }
};

/* PUBLIC TYPE TRANSACTIONS
// OTHERS ARE INTERNAL AND HIDDEN
// AS IN INTERNAL CONTRA TRANSACTION

'RECEIVE', --
'SEND',  -- 
'TOPUP', 
'FEE', 
'TAX', 
'CONVERT',
*/


const zarPrice = {
  type: 'number',
  valueFormatter: ({ value }) => currencyFormatter.format(Number(value)),
};

const zarDateTime = {
  type: 'dateTime',
  valueFormatter: ({ value }) => datetimeFormatter.format(parseISOString(value)),
};

const columns = [
{ field: 'id',            headerName: 'Action', renderCell: (params) => (Icon(params.getValue(params.id, 'type'))), flex: 1},
{ field: "accountID",     hide: true},
{ field: 'type',          hide: true},
{ field: "transactionID", flex: 0.8},
{ field: "dateTime",      headerName: 'Date Time', ...zarDateTime, flex: 0.8},
{ field: "amount",        headerName: 'Amount', ...zarPrice, flex: 0.6},
{ field: "description",   headerName: 'Description', flex: 1}
];

export default function TransactionsDataGrid() {

  const context = useContext(TransactionsContext);
  const { transactions } = context;
  const rows = transactions;

  const [open, setOpen] = React.useState(false);
  const [row, setData] = React.useState(false);

  const handleClickOpen = (params) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setData(row);
  };

  return (
  <>
    <Card>
      <CardContent>
        <DataGrid 
          rows={rows} 
          columns={columns} 
          pageSize={5} 
          autoHeight 
          disableColumnSelector 
          hideFooterSelectedRowCount 
          pagination
          rowsPerPageOptions={[5, 10, 20]} 
          onRowClick={(params, event) => {
            let row = params.row;
            handleClickOpen(row)
          
          }}
          />
      </CardContent>
    </Card>
    <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">Transaction Details</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <TransactionsDetail data={row}/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Done
          </Button>
        </DialogActions>  
    </Dialog>
  </>
  );
};