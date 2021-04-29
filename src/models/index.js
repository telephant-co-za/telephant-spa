// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const AccountStatus = {
  "ACTIVE": "ACTIVE"
};

const TransationTypes = {
  "SEND": "SEND",
  "WITHDRAW": "WITHDRAW",
  "RECEIVE": "RECEIVE",
  "DEPOSIT": "DEPOSIT",
  "USE": "USE"
};

const { Notifications, Account, Transactions, Contacts } = initSchema(schema);

export {
  Notifications,
  Account,
  Transactions,
  Contacts,
  AccountStatus,
  TransationTypes
};