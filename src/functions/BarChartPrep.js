// This function prepares the transactions for the bar chart
// It is not an elegant script and needs attetion
// But it works 

    // BREAKS THE TRANSACTIONS PAGE !!!!! WHEN USING CONTEXTS

  export function BarChartPrep(data) {

    const trans = [
        {
            "type": "TOPUP",
            "transactionID": "8he49vuc",
            "accountID": "60ebd53e2f79311541618bc6",
            "dateTime": "2021-05-05T12:12:00.000Z",
            "amount": 150,
            "description": "Account top up",
            "id": 1
        },
        {
            "type": "RECEIVE",
            "transactionID": "4g7hcv7",
            "accountID": "60ebd53e2f79311541618bc6",
            "dateTime": "2021-05-17T11:45:00.000Z",
            "amount": 10,
            "description": "Received credit",
            "id": 2
        },
        {
            "type": "SEND",
            "transactionID": "8q129bib",
            "accountID": "60ebd53e2f79311541618bc6",
            "dateTime": "2021-05-27T09:16:00.000Z",
            "amount": -100,
            "description": "Sending credit",
            "id": 3
        },
        {
            "type": "FEE",
            "transactionID": "8q129bib",
            "accountID": "60ebd53e2f79311541618bc6",
            "dateTime": "2021-05-27T09:16:00.000Z",
            "amount": -1,
            "description": "Sending fee",
            "id": 4
        },
        {
            "type": "TAX",
            "transactionID": "8q129bib",
            "accountID": "60ebd53e2f79311541618bc6",
            "dateTime": "2021-05-27T09:16:00.000Z",
            "amount": -0.15,
            "description": "VAT",
            "id": 5
        },
        {
            "type": "TAX",
            "transactionID": "2dguitrb",
            "accountID": "60ebd53e2f79311541618bc6",
            "dateTime": "2021-06-01T09:12:00.000Z",
            "amount": -0.15,
            "description": "VAT",
            "id": 6
        },
        {
            "type": "SEND",
            "transactionID": "2dguitrb",
            "accountID": "60ebd53e2f79311541618bc6",
            "dateTime": "2021-06-01T09:12:00.000Z",
            "amount": -10,
            "description": "Sending credit",
            "id": 7
        },
        {
            "type": "FEE",
            "transactionID": "2dguitrb",
            "accountID": "60ebd53e2f79311541618bc6",
            "dateTime": "2021-06-01T09:12:00.000Z",
            "amount": -1,
            "description": "Sending fee",
            "id": 8
        }
    ]

//const trans = data

var data2 = []
trans.forEach(cleanItem);
const labels = Labels()

// Group and Sum
var values = []
labels.forEach(groupByAndSum)

return values


// Little functions

// delete the extra fields 
function cleanItem(data) {
       
    delete data.id
    delete data.transactionID
    delete data.accountID
    delete data.description
    delete data.dateTime
    
    data2.push(data)
    }

// Group by the data and then sum
// Could be done better
function groupByAndSum(label){

        var d =  data2.filter(function(row) 
    {
        return row.type === label;
        });
    
    let sum = 0;
    
        for (let i = 0; i < d.length; i++) 
    {
            sum += d[i]['amount'];
        }
    
    values.push(sum)
    }
  }

export function Labels(input) 
{

    const trans = [
        {
            "type": "TOPUP",
            "transactionID": "8he49vuc",
            "accountID": "60ebd53e2f79311541618bc6",
            "dateTime": "2021-05-05T12:12:00.000Z",
            "amount": 150,
            "description": "Account top up",
            "id": 1
        },
        {
            "type": "RECEIVE",
            "transactionID": "4g7hcv7",
            "accountID": "60ebd53e2f79311541618bc6",
            "dateTime": "2021-05-17T11:45:00.000Z",
            "amount": 10,
            "description": "Received credit",
            "id": 2
        },
        {
            "type": "SEND",
            "transactionID": "8q129bib",
            "accountID": "60ebd53e2f79311541618bc6",
            "dateTime": "2021-05-27T09:16:00.000Z",
            "amount": -100,
            "description": "Sending credit",
            "id": 3
        },
        {
            "type": "FEE",
            "transactionID": "8q129bib",
            "accountID": "60ebd53e2f79311541618bc6",
            "dateTime": "2021-05-27T09:16:00.000Z",
            "amount": -1,
            "description": "Sending fee",
            "id": 4
        },
        {
            "type": "TAX",
            "transactionID": "8q129bib",
            "accountID": "60ebd53e2f79311541618bc6",
            "dateTime": "2021-05-27T09:16:00.000Z",
            "amount": -0.15,
            "description": "VAT",
            "id": 5
        },
        {
            "type": "TAX",
            "transactionID": "2dguitrb",
            "accountID": "60ebd53e2f79311541618bc6",
            "dateTime": "2021-06-01T09:12:00.000Z",
            "amount": -0.15,
            "description": "VAT",
            "id": 6
        },
        {
            "type": "SEND",
            "transactionID": "2dguitrb",
            "accountID": "60ebd53e2f79311541618bc6",
            "dateTime": "2021-06-01T09:12:00.000Z",
            "amount": -10,
            "description": "Sending credit",
            "id": 7
        },
        {
            "type": "FEE",
            "transactionID": "2dguitrb",
            "accountID": "60ebd53e2f79311541618bc6",
            "dateTime": "2021-06-01T09:12:00.000Z",
            "amount": -1,
            "description": "Sending fee",
            "id": 8
        }
    ]

    input = trans

    const labels = [...new Set(input.map(row => row.type))]
    return labels
}