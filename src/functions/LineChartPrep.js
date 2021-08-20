// Fixed up these functions they were breaking the transactions context

function determineDates(a) {
  let dates = [];
  a.forEach((element, index) => {
    if (!dates.includes(element.dateTime)) dates[index] = element.dateTime;
  });
  var g = dates.filter(function (el) {
    return el != null;
  });
  return g;
}

export function determineLineChartValues(a) {
  const dates = determineDates(a);
  let c = [];

  // groups and sums by date
  dates.forEach((date, index) => {
    let sum = 0;
    a.forEach((b) => {
      if (b.dateTime === date) {
        sum = sum + b.amount;
      }
      c[index] = { x: date, y: sum };
    });
  });

  let bal = 0;

  // generates a running balance
  c.forEach((d, index) => {
    bal = bal + d.y;
    c[index].y = bal;
  });

  // cleans up the dates
  c.forEach((m, index) => {
    var date = new Date(m.x);

    // dates components
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    // leading zeros
    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }

    let u = year + "-" + month + "-" + day;

    // replace date
    c[index].x = u;
  });
  return c;
}
