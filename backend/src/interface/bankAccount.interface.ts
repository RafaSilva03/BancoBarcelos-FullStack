import { uuidv4 as v4 } from "uuid";

export interface ParsedBankAccount{
    holder_id: string;
    user_id: string;
    account_number?: uuidv4;
    iban : string;
    current_balance: number;
    available_balance: number;
    opened_date: string;
    closed_date?: string;
    statusId: string;
    accountTypeId: string;
}

export interface ResponseBankAccount
{
    account_number: string;
    iban: string;
    opened_date: string;
    closed_date?: string;
    status_id: string;
    accountType_id: string;
    current_balance: number;
    available_balance: number;
}

export interface DeleteBankAccount
{
    account_number: string;
    statusId: string;
    closed_date: string;
}