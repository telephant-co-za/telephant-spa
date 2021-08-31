import React, { useEffect, useContext, useState } from "react";
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
import Alert from "@material-ui/lab/Alert";
import { useParams } from "react-router-dom";
import { formatZAR } from "../functions/Formatting";
import { zarDateTime } from "../functions/Formatting";
import { AuthContext } from "../contexts/AuthenticationContext";
import { apiGetTransactionDetail } from "../api/api";

const TransactionsDetail = (props) => {
  const [header, setHeader] = useState(null);
  const [lines, setLines] = useState(null);
  const [notification, setNotification] = useState(null);

  const context = useContext(AuthContext);
  const { isAuthenticated } = context;

  // transaction id
  let { tx } = useParams();

  useEffect(() => {
    apiGetTransactionDetail(tx).then((value) => {
      setHeader(value.header);
      setLines(value.lines);
      setNotification(value.notification);
    });
  }, [isAuthenticated, tx]);

  let head = { ...header };
  let lineItems = { ...lines };
  let note = { ...notification };

  function generateRows(lineItems) {
    let content = [];
    for (const index in lineItems) {
      content.push(
        <>
          <TableRow
            style={index % 2 ? { background: "white" } : { background: "#eee" }}
          >
            <TableCell>{lineItems[index].type}</TableCell>
            <TableCell>{lineItems[index].description}</TableCell>
            <TableCell>{formatZAR(lineItems[index].amount)}</TableCell>
          </TableRow>
        </>
      );
    }
    return content;
  }

  let rows = generateRows(lineItems);

  return (
    <>
      <Box width={4 / 5}>
        <Card>
          <CardHeader title="Transaction Detail" />
          <CardContent>
            <Table width={1 / 2}>
              <TableBody>
                <TableRow>
                  <TableCell variant="head">Transaction ID</TableCell>
                  <TableCell>
                    <b>{head.transactionID}</b>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant="head">Date Time</TableCell>
                  <TableCell>{head.dateTime}</TableCell>
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
                        {formatZAR(head.total)}
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </CardContent>
        </Card>
        {note[0] ? (
          <Box m={2} boxShadow={3}>
            <Alert severity="info">
              <h3>Notification of Transaction Received</h3>
              <p>You {note[0].subject} airtime.</p>
              <p>{note[0].message}</p>
              <p>
                {note[0].read
                  ? "You read this message on " + zarDateTime(note[0].updatedAt)
                  : "You never read this message"}
              </p>
            </Alert>
          </Box>
        ) : (
          <></>
        )}
      </Box>
    </>
  );
};

export default TransactionsDetail;
