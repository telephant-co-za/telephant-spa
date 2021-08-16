import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { TransactionIcons } from "../functions/Formatting";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { TransactionsContext } from "../contexts/TransactionsContext";

const currencyFormatter = new Intl.NumberFormat("en-ZA", {
  style: "currency",
  currency: "ZAR",
});

const datetimeFormatter = new Intl.DateTimeFormat("en-GB", {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

function parseISOString(s) {
  // Grid passing in undefined values and breaking so exclude undefined
  if (typeof s != "undefined") {
    var b = s.split(/\D+/);
    return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
  }
}

const zarPrice = {
  type: "number",
  valueFormatter: ({ value }) => currencyFormatter.format(Number(value)),
};

const zarDateTime = {
  type: "dateTime",
  valueFormatter: ({ value }) =>
    datetimeFormatter.format(parseISOString(value)),
};

const columns = [
  {
    field: "id",
    headerName: "Action",
    renderCell: (params) =>
      TransactionIcons(params.getValue(params.id, "type")),
    flex: 0.6,
  },
  { field: "accountID", hide: true },
  { field: "type", hide: true },
  { field: "transactionID", flex: 1, headerName: "Transaction ID" },
  { field: "dateTime", headerName: "Date Time", ...zarDateTime, flex: 0.8 },
  { field: "amount", headerName: "Amount", ...zarPrice, flex: 0.6 },
  { field: "description", headerName: "Description", flex: 1 },
];

export default function TransactionsDataGrid() {
  const context = useContext(TransactionsContext);
  const history = useHistory();

  const handleRoute = (row) => {
    const path = "/transactions/" + row.transactionID;
    history.push(path);
  };

  const { transactions } = context;
  const rows = transactions;

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
              handleRoute(row);
            }}
          />
        </CardContent>
      </Card>
    </>
  );
}
