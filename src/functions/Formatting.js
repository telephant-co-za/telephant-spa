import InfoIcon from "@material-ui/icons/Info";
import DefaultIcon from "@material-ui/icons/Help";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CancelIcon from "@material-ui/icons/Cancel";
import BuyIcon from "@material-ui/icons/CreditCard";
import UseIcon from "@material-ui/icons/PhoneInTalk";
import SendIcon from "@material-ui/icons/Send";
import ReceiveIcon from "@material-ui/icons/CallReceived";
import DefaultIcon2 from "@material-ui/icons/Help"; // Shouldn't show
import TopupIcon from "@material-ui/icons/LocalAtm";
import TaxIcon from "@material-ui/icons/AccountBalance";
import FeeIcon from "@material-ui/icons/AttachMoney";
import Typography from "@material-ui/core/Typography";
import { green } from "@material-ui/core/colors";
import { red } from "@material-ui/core/colors";
import { blue } from "@material-ui/core/colors";

// Currency Funtions

export const formatZAR = (value) => {
  const currencyFormatter = new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
  });

  return currencyFormatter.format(Number(value));
};

// Date Time Functions

export const zarDateTime = (value) => {
  return datetimeFormatter.format(parseISOString(value));
};

const datetimeFormatter = new Intl.DateTimeFormat("en-GB", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

function parseISOString(s) {
  // Grid passing in undefined values and breaking so exclude undefined
  if (typeof s != "undefined") {
    var b = s.split(/\D+/);
    return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
  }
}

// Icon functions

export const ReadOrNot = (value) => {
  switch (value) {
    case true:
      return <CheckBoxIcon style={{ color: green[500] }} />;
    case false:
      return <CancelIcon style={{ color: red[500] }} />;
    default:
      return <DefaultIcon />;
  }
};

export const NotificationIcons = (value) => {
  switch (value) {
    case "INFO":
      return <InfoIcon style={{ color: blue[500] }} />;
    case "REQUEST":
      return <RecentActorsIcon style={{ color: blue[500] }} />;
    default:
      return <DefaultIcon />;
  }
};

export const TransactionIcons = (value) => {
  switch (value) {
    case "DEPOSIT":
      return (
        <>
          <BuyIcon />
          <Typography style={{ marginLeft: "3px" }} variant="subtitle2">
            Buy
          </Typography>
        </>
      );
    case "TAX":
      return (
        <>
          <TaxIcon />
          <Typography style={{ marginLeft: "3px" }} variant="subtitle2">
            Tax
          </Typography>
        </>
      );
    case "CONVERT":
      return (
        <>
          <UseIcon />
          <Typography style={{ marginLeft: "3px" }} variant="subtitle2">
            Use
          </Typography>
        </>
      );
    case "SEND":
      return (
        <>
          <SendIcon />
          <Typography style={{ marginLeft: "3px" }} variant="subtitle2">
            Send
          </Typography>
        </>
      );
    case "RECEIVE":
      return (
        <>
          <ReceiveIcon />
          <Typography style={{ marginLeft: "3px" }} variant="subtitle2">
            Receive
          </Typography>
        </>
      );
    case "FEE":
      return (
        <>
          <FeeIcon />
          <Typography style={{ marginLeft: "3px" }} variant="subtitle2">
            Fee
          </Typography>
        </>
      );
    case "TOPUP":
      return (
        <>
          <TopupIcon />
          <Typography style={{ marginLeft: "3px" }} variant="subtitle2">
            Top Up
          </Typography>
        </>
      );
    default:
      return (
        <>
          <DefaultIcon2 />
          <Typography style={{ marginLeft: "3px" }} variant="subtitle2">
            Unknown
          </Typography>
        </>
      );
  }
};

/* PUBLIC TYPE TRANSACTIONS
  // OTHERS ARE INTERNAL AND HIDDEN
  // AS IN INTERNAL CONTRA TRANSACTION
  
  'RECEIVE', --
  'SEND',  -- 
  'TOPUP', 
  'FEE', 
  'TAX', 
  'CONVERT',
  */
