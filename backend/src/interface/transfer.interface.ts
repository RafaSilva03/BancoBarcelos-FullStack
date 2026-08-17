import { uuidv4 as v4 } from "uuid";
import { BankAccount } from "./";

export interface ParsedTransfer{
    id?: uuidv4;
    ammount: number;
    tax_fee: number;
    date: string;
    description: string;
    source_account_id: string;
    destination_account_id: string;
}

export interface ResponseTransfer
{
    id: string;
    ammount: number;
    tax_fee: number;
    date: string;
    description: string;

    source_account: BankAccount.ResponseBankAccount;
    destination_account :BankAccount.ResponseBankAccount;
}