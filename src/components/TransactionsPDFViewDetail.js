import React from "react";
import { PDFViewer } from "@react-pdf/renderer";

import TransactionsPDF from "./TransactionsPDF";

export default function TransactionsPDFViewDetails(props) {
  return (
    <PDFViewer width="100%" height="800px">
      <TransactionsPDF />
    </PDFViewer>
  );
}
