import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum AccountStatus {
  ACTIVE = "ACTIVE"
}

export enum TransationTypes {
  SEND = "SEND",
  WITHDRAW = "WITHDRAW",
  RECEIVE = "RECEIVE",
  DEPOSIT = "DEPOSIT",
  USE = "USE"
}



export declare class Notifications {
  readonly id: string;
  constructor(init: ModelInit<Notifications>);
  static copyOf(source: Notifications, mutator: (draft: MutableModel<Notifications>) => MutableModel<Notifications> | void): Notifications;
}

export declare class Account {
  readonly id: string;
  readonly AccountName?: string;
  readonly AccountBalance?: string;
  readonly AccountStatus?: AccountStatus | keyof typeof AccountStatus;
  constructor(init: ModelInit<Account>);
  static copyOf(source: Account, mutator: (draft: MutableModel<Account>) => MutableModel<Account> | void): Account;
}

export declare class Transactions {
  readonly id: string;
  readonly Type: TransationTypes | keyof typeof TransationTypes;
  readonly AccountID: string;
  readonly Amount: number;
  readonly DateTime: string;
  readonly MatchTransactionID?: (string | null)[];
  constructor(init: ModelInit<Transactions>);
  static copyOf(source: Transactions, mutator: (draft: MutableModel<Transactions>) => MutableModel<Transactions> | void): Transactions;
}

export declare class Contacts {
  readonly id: string;
  readonly FirstName?: string;
  readonly LastName?: string;
  readonly TelephoneNumber: string;
  constructor(init: ModelInit<Contacts>);
  static copyOf(source: Contacts, mutator: (draft: MutableModel<Contacts>) => MutableModel<Contacts> | void): Contacts;
}