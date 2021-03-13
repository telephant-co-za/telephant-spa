import React from "react";
//import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import DatePicker from './DatePicker'

// Implement CSS Styles here...

export default function TransactionsFilterCard(props) {
    //const classes = useStyles();

    return (
        <Card>
            <CardHeader title="Filter" />
            <CardContent>
                    <Grid container>
                        <Grid item>
                                <DatePicker />
                        </Grid>
                        <Grid item>
                            <DatePicker />
                        </Grid>
                    </Grid>
            </CardContent>
        </Card>
    )
}