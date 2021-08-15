// This function prepares the transactions for the line chart
// It is not an elegant script and needs attetion
// But it works

export function LineChartPrep(data) {
  var data2 = [];

  // Cleans the initial data of gumph
  data.forEach(cleanItem);

  // Creates a list of dates that are in the data
  var dates = [...new Set(data2.map((row) => row.date))];

  // Turns the data into an array of key values (dates and amounts)
  var result = [];
  result = data2.reduce(function (res, value) {
    if (!res[value.date]) {
      res[value.date] = { x: value.date, y: 0 };
      result.push(res[value.date]);
    }

    res[value.date].y += value.amount;

    return res;
  }, {});

  // This cleans up the array generated
  var final = [];
  dates.forEach(printDate);

  // Finally get the final result into a clean format, sum the amounts and round off
  for (let k = 0; k < final.length; k++) {
    if (k !== 0) {
      final[k].y = parseFloat((final[k - 1].y + final[k].y).toFixed(2));
    }
  }

  return final;

  // Little functions that helped
  function printDate(date) {
    final.push(result[date]);
  }

  function cleanItem(data) {
    // delete the extra fields
    delete data.id;
    delete data.transactionID;
    delete data.accountID;
    delete data.description;
    delete data.type;

    var date = new Date(data.dateTime);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var dt = date.getDate();

    if (dt < 10) {
      dt = "0" + dt;
    }
    if (month < 10) {
      month = "0" + month;
    }

    data.date = year + "-" + month + "-" + dt;

    delete data.dateTime;

    data2.push(data);
  }
}
