import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'icon', headerName: 'Icon' },
  { field: 'type', headerName: 'Transaction Type' },
  { field: 'id', headerName: 'Transaction ID' },
  { field: 'timestamp', headerName: 'Timestamp', type: 'number' },
  {
    field: 'amount',
    headerName: 'Amount',
    description: 'This column has a value getter and is not sortable.',
    //sortable: false,
    //width: 160,
    //valueGetter: (params) =>
    //  `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
  },
];

const rows = [
  { id: 'cJYXv14t0P', icon: 1, type: 'Deposit', timestamp: '1577836800', amount: 100.00 },
  { id: 'n6LzxSIOgD', icon: 2, type: 'Transfer', timestamp: '1609459200', amount: 52.00 },
  { id: 'TAv9kjdBdN', icon: 3, type: 'Conversion', timestamp: '1640995200', amount: 10.00 },
  { id: 'u9vpZ3rDX9', icon: 4, type: 'Deposit', timestamp: '1672531200', amount: 50.00 },
  { id: 'wGuEKCDpN7', icon: 5, type: 'Conversion', timestamp: '1704067200', amount: 15.00 },
  { id: 'wxtnuTit5D', icon: 6, type: 'Withdraw', timestamp: '1735689600', amount: 30.00 },
  { id: 'Y2jiihzS8C', icon: 7, type: 'Conversion', timestamp: '1767225600', amount: 10.00 },
  { id: 'zzOSbIAEkV', icon: 8, type: 'Transfer', timestamp: '1798761600', amount: 45.34 },
  { id: 'hZZOcKVWi6', icon: 9, type: 'Deposit', timepstamp: '1830297600', amount: 100 },
];

export default function TransactionsDataGrid() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}