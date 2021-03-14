import React from "react";
import DownloadIcon from '@material-ui/icons/GetApp';
import { Card, CardContent, CardActions, CardHeader, Fab } from "@material-ui/core/";
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

export default function TransactionsExportCard(props) {
    return (
        <Card>
            <CardHeader title="Export Transactions"  align="center" />
            <CardContent>
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