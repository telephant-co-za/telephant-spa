// Fixed these functions
// They were a disaster as they were changing the transactions context and messing up everything!!
// Phew!

export function determineTypes(a) {
  let types = [];
  a.forEach((element, index) => {
    if (!types.includes(element.type)) types[index] = element.type;
  });
  return types;
}

export function determineBarChartValues(a) {
  const types = determineTypes(a);
  let c = [];

  types.forEach((type, index) => {
    let sum = 0;
    a.forEach((b) => {
      if (b.type === type) {
        sum = sum + b.amount;
      }
      c[index] = { x: type, y: sum };
    });
  });
  return c;
}
