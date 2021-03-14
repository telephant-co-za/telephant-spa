import React from "react";
import { Card, CardHeader, CardContent, CardActions, Fab } from "@material-ui/core";

import MailIcon from '@material-ui/icons/MailOutline';
import PdfIcon from '@material-ui/icons/PictureAsPdf';
import DownloadIcon from '@material-ui/icons/GetApp';

import { CsvBuilder } from 'filefy';

function csvBuilder() {
    new CsvBuilder("user_list.csv")
                .setColumns(["name", "surname"])
                .addRow(["Eve", "Holt"])
                .addRows([
                ["Charles", "Morris"],
                ["Tracey", "Ramos"]
                                ])
  .exportFile();
}

//function downloadPDF()
//onClick={() => { downloadPDF();

export default function TransactionsActionCard(props) {
    const link = `${window.location.href}/pdf`
    return (
        <Card>
            <CardHeader title="Export Options"  align="center" />
            <CardContent>
                <CardActions style={{ justifyContent: 'center' }}>
                    <Fab variant="extented" color="primary" style={{ width: '200px' }}>
                        <MailIcon />
                        Send PDF
                    </Fab>
                </CardActions >
                <CardActions style={{ justifyContent: 'center' }}>
                    <Fab variant="extented" color="primary" style={{ width: '200px' }} href={link}>
                        <PdfIcon />
                        View PDF
                    </Fab>
                </CardActions>
                <CardActions style={{ justifyContent: 'center' }}>
                    <Fab variant="extented" color="primary" style={{ width: '200px'}}  onClick={() => { csvBuilder(); }}>
                        <DownloadIcon />
                        Download CSV
                    </Fab>
                </CardActions>
            </CardContent>
        </Card>
    )
}