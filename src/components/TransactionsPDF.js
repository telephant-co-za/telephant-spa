import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import logo from "../assets/transactions-pdf-logo.png";
import { formatZAR, zarDateTime } from "../functions/Formatting";

const borderColor = "#666362";
const backgroundColor = "white";

// Create styles
const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    lineHeight: 1.5,
    flexDirection: "column",
    backgroundColor: backgroundColor,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  logo: {
    width: 452,
    height: 210,
    marginLeft: "auto",
    marginRight: "auto",
  },
  titleContainer: {
    flexDirection: "row",
    marginTop: 24,
  },
  reportTitle: {
    color: "orange",
    letterSpacing: 4,
    fontSize: 25,
    textAlign: "center",
    textTransform: "uppercase",
  },
  reportFooter: {
    color: "orange",
    letterSpacing: 4,
    fontSize: 18,
    textAlign: "center",
    textTransform: "uppercase",
  },
  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 24,
    borderWidth: 1,
    borderColor: "#666362",
  },
  container: {
    flexDirection: "row",
    borderBottomColor: "#666362",
    backgroundColor: "#ccc",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 24,
    textAlign: "center",
    fontStyle: "bold",
    flexGrow: 1,
  },
  transactionId: {
    width: "15%",
    borderRightColor: borderColor,
    marginLeft: "3px",
  },
  dateTime: {
    width: "15%",
    borderRightColor: borderColor,
  },
  type: {
    width: "15%",
    borderRightColor: borderColor,
  },
  description: {
    width: "40%",
    borderRightColor: borderColor,
  },
  amount: {
    width: "15%",
  },
  row: {
    flexDirection: "row",
    borderBottomColor: "#666362",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 24,
    fontStyle: "bold",
  },
});

const transactions = [
  {
    type: "TOPUP",
    transactionID: "8he49vuc",
    accountID: "60ebd53e2f79311541618bc6",
    dateTime: "2021-05-05T12:12:00.000Z",
    amount: 150,
    description: "Account top up",
    id: 1,
  },
  {
    type: "RECEIVE",
    transactionID: "4g7hcv7",
    accountID: "60ebd53e2f79311541618bc6",
    dateTime: "2021-05-17T11:45:00.000Z",
    amount: 10,
    description: "Received credit",
    id: 2,
  },
  {
    type: "SEND",
    transactionID: "8q129bib",
    accountID: "60ebd53e2f79311541618bc6",
    dateTime: "2021-05-27T09:16:00.000Z",
    amount: -100,
    description: "Sending credit",
    id: 3,
  },
  {
    type: "FEE",
    transactionID: "8q129bib",
    accountID: "60ebd53e2f79311541618bc6",
    dateTime: "2021-05-27T09:16:00.000Z",
    amount: -1,
    description: "Sending fee",
    id: 4,
  },
  {
    type: "TAX",
    transactionID: "8q129bib",
    accountID: "60ebd53e2f79311541618bc6",
    dateTime: "2021-05-27T09:16:00.000Z",
    amount: -0.15,
    description: "VAT",
    id: 5,
  },
  {
    type: "TAX",
    transactionID: "2dguitrb",
    accountID: "60ebd53e2f79311541618bc6",
    dateTime: "2021-06-01T09:12:00.000Z",
    amount: -0.15,
    description: "VAT",
    id: 6,
  },
  {
    type: "SEND",
    transactionID: "2dguitrb",
    accountID: "60ebd53e2f79311541618bc6",
    dateTime: "2021-06-01T09:12:00.000Z",
    amount: -10,
    description: "Sending credit",
    id: 7,
  },
  {
    type: "FEE",
    transactionID: "2dguitrb",
    accountID: "60ebd53e2f79311541618bc6",
    dateTime: "2021-06-01T09:12:00.000Z",
    amount: -1,
    description: "Sending fee",
    id: 8,
  },
];

// Create Document Component
export default function TransactionsPDF(props) {
  const rows = transactions.map((item) => (
    <View style={styles.row} key={item.id}>
      <Text style={styles.transactionId}>{item.transactionID}</Text>
      <Text style={styles.transactionId}>{item.type}</Text>
      <Text style={styles.dateTime}>{zarDateTime(item.dateTime)}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.amount}>{formatZAR(item.amount.toFixed(2))}</Text>
    </View>
  ));

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Image style={styles.logo} src={logo} />
        <View style={styles.titleContainer}>
          <Text style={styles.reportTitle}>Telephant Transactions</Text>
        </View>
        <View style={styles.tableContainer}>
          <View style={styles.container}>
            <Text style={styles.transactionId}>Transaction #</Text>
            <Text style={styles.type}>Type</Text>
            <Text style={styles.dateTime}>Date Time</Text>
            <Text style={styles.description}>Description</Text>
            <Text style={styles.amount}>Amount</Text>
          </View>
          {rows}
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.reportFooter}>
            Sell, Send, Store, Request &amp; Use Airtime.
          </Text>
        </View>
      </Page>
    </Document>
  );
}
