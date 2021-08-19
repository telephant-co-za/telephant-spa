import React, { useContext } from "react";
import { Line } from "react-chartjs-2";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import { determineLineChartValues } from "../functions/LineChartPrep";
import { TransactionsContext } from "../contexts/TransactionsContext";

export default function DashboardChartLine() {
  const context = useContext(TransactionsContext);
  const { transactions } = context;

  let LineChartData = determineLineChartValues(transactions);

  var config = {
    datasets: [
      {
        label: "Account Balance",
        data: LineChartData,
        fill: true,
        borderColor: "orange",
      },
    ],
  };

  return (
    <Card style={{ height: "150" }}>
      <CardHeader title="Balance Movement" align="center" />
      <CardContent>
        <Line data={config} />
      </CardContent>
    </Card>
  );
}
