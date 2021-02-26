import React from "react";
//import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

// Implement CSS Styles here...

export default function TransactionsExportCard(props) {
    //const classes = useStyles();

    return (
        <Card>
            <CardHeader title="Export CSV" />
            <CardContent>
                    <Grid container>
                        <Grid item>
                            <Button variant="contained" color="primary">Export</Button>
                        </Grid>
                    </Grid>
            </CardContent>
        </Card>
    )
}