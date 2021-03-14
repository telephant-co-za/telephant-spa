import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import { Box } from "@material-ui/core";

import TransactionsPDF from './TransactionsPDF';

export default function TransactionsViewPDF(props) {
    return (

    <PDFViewer width='100%' height='800px'>
        <TransactionsPDF />
    </PDFViewer>

    );
}
