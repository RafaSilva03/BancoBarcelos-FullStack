import { uuidv4 as v4 } from "uuid";
import { BankAccount } from "./";

export interface ParsedRecurringTransfer{
    id?: uuidv4;
    ammount: number;
    tax_fee: number;
    start_date: string;
    end_date: string;
    description: string;
    periodTypeId: string;
    statusId: string;
    source_account_id: string;
    destination_account_id: string;
}

export interface ResponseRecurringTransfer
{
    id: string;
    ammount: number;
    tax_fee: number;
    start_date: string;
    end_date: string;
    description: string;
    periodTypeId: string;
    statusId: string;
    source_account: BankAccount.ResponseBankAccount;
    destination_account :BankAccount.ResponseBankAccount;
}