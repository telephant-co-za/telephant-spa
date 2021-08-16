import * as React from "react";
import {
  Table,
  TableCell,
  TableRow,
  TableBody,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Box,
} from "@material-ui/core";
import { formatZAR, zarDateTime } from "../functions/Formatting";

const transaction = {
  header: {
    transactionID: "2dguitrb",
    dateTime: "2021-06-01T09:12:00.000Z",
    total: -11.15,
  },
  lines: [
    {
      type: "SEND",
      accountID: "60ebd53e2f79311541618bc6",
      amount: -10,
      description: "Sending credit",
    },
    {
      type: "TAX",
      accountID: "60ebd53e2f79311541618bc6",
      amount: -0.15,
      description: "VAT",
    },
    {
      type: "FEE",
      accountID: "60ebd53e2f79311541618bc6",
      amount: -1,
      description: "Sending fee",
    },
  ],
};

const rows = transaction.lines.map((item, index) => (
  <>
    <TableRow
      style={index % 2 ? { background: "white" } : { background: "#eee" }}
    >
      <TableCell>{item.type}</TableCell>
      <TableCell>{item.description}</TableCell>
      <TableCell>{formatZAR(item.amount)}</TableCell>
    </TableRow>
  </>
));

const TransactionsDetail = (props) => {
  return (
    <Box width={1 / 2}>
      <Card>
        <CardHeader title="Transaction Detail" />
        <CardContent>
          <Table width={1 / 2}>
            <TableBody>
              <TableRow>
                <TableCell variant="head">Transaction ID</TableCell>
                <TableCell>
                  <b>{transaction.header.transactionID}</b>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant="head">Date Time</TableCell>
                <TableCell>
                  {zarDateTime(transaction.header.dateTime)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Box pt={5}>
            <Typography variant="h6">Transaction Lines</Typography>
            <Table>
              <TableBody>
                {rows}
                <TableRow>
                  <TableCell variant="head" colSpan={2}>
                    <Typography variant="h6">Total</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">
                      {formatZAR(transaction.header.total)}
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TransactionsDetail;
