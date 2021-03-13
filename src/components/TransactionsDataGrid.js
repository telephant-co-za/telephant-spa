import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Typography from '@material-ui/core/Typography';

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
  month: 'short',
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
  switch(params.getValue('type')) {
    case 'Deposit': // Buy
      return <><BuyIcon /><Typography style={{marginLeft: '3px'}} variant='subtitle2'>Buy</Typography></>
    case 'Conversion': // Use
      return <><UseIcon /><Typography style={{marginLeft: '3px'}} variant='subtitle2'>Use</Typography></>
    case 'Transfer': // Send
        return <><SendIcon /><Typography style={{marginLeft: '3px'}} variant='subtitle2'>Send</Typography></>
    case 'Received': // Receive
      return <><ReceiveIcon /><Typography style={{marginLeft: '3px'}} variant='subtitle2'>Receive</Typography></>
    case 'Withdraw': // Withdraw
      return <><WithdrawIcon /><Typography style={{marginLeft: '3px'}} variant='subtitle2'>Withdraw</Typography></>
    default: // Default
      return <><DefaultIcon /><Typography style={{marginLeft: '3px'}} variant='subtitle2'>Unknown</Typography></>
  }
}


const columns = [
  { field: 'icon', headerName: 'Action', flex: 1.5,
      renderCell: getIcon,
      //sortComparator: (v1, v2, cellParams1, cellParams2) =>
      //getFullName(cellParams1).localeCompare(getFullName(cellParams2)),
  },
  { field: 'type', headerName: 'Transaction Type', flex: 2 },
  { field: 'id', headerName: 'Transaction ID', flex: 1.5 },
  { field: 'timestamp', headerName: 'Date and Time',  type: 'dateTime', flex: 2, ...zarDateTime },
  { field: 'amount', headerName: 'Amount', flex: 1, ...zarPrice }
];

const rows = [
  { id: 'cJYXv14t0P', icon: 1, type: 'Deposit', timestamp: '2020-03-25T12:16:44Z', amount: 100.00 },
  { id: 'n6LzxSIOgD', icon: 2, type: 'Transfer', timestamp: '2019-09-07T02:33:41Z', amount: 52.00 },
  { id: 'TAv9kjdBdN', icon: 3, type: 'Conversion', timestamp: '2019-09-27T06:44:46Z', amount: 10.00 },
  { id: 'u9vpZ3rDX9', icon: 4, type: 'Deposit', timestamp: '2019-03-05T13:04:17Z', amount: 50.00 },
  { id: 'wGuEKCDpN7', icon: 5, type: 'Conversion', timestamp: '2020-10-11T19:08:31Z', amount: 15.00 },
  { id: 'wxtnuTit5D', icon: 6, type: 'Withdraw', timestamp: '2020-08-08T14:47:01Z', amount: 30.00 },
  { id: 'Y2jiihzS8C', icon: 7, type: 'Conversion', timestamp: '2020-03-11T05:46:04Z', amount: 10.00 },
  { id: 'zzOSbIAEkV', icon: 8, type: 'Transfer', timestamp: '12019-10-31T10:09:47Z', amount: 45.34 },
  { id: 'hZZOcKVWi6', icon: 9, type: 'Deposit', timepstamp: '2020-06-04T22:49:01Z', amount: 100 },
];

export default function TransactionsDataGrid() {
  return (
  <div style={{ display: 'flex', height: '100%', width: '100%', flexGrow: 1 }}>
    <DataGrid 
      rows={rows} 
      columns={columns} 
      pageSize={5} 
      autoHeight 
      disableColumnSelector 
      hideFooterSelectedRowCount 
      pagination
      rowsPerPageOptions={[5, 10, 20]} 
      />
  </div>
  );
}