import { uuidv4 as v4 } from "uuid";

export interface ParsedCreditPayment {
    id?: uuidv4;
    value_paid: number;
    payment_date: string;
    loan_credit_id: string;
}

export interface ResponseCreditPayment {
    id?: string;
    value_paid: number;
    payment_date: string;
    loan_credit_id: string;
}
