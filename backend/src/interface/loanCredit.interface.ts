import { uuidv4 as v4 } from "uuid";

export interface ParsedLoanCredit {
    id?: uuidv4;
    value: number;
    start_date: string;
    final_date?: string;
    terms: string;
    tan: number;
    taeg: number;
    mtic: number;
    status_id: string;
    account_number_id: string;
    loan_credit_type_id: string;
}

export interface ResponseLoanCredit {
    id?: uuidv4;
    value: number;
    start_date: string;
    final_date?: string;
    terms: string;
    tan: number;
    taeg: number;
    mtic: number;
    status_id: string;
    account_number_id: string;
    loan_credit_type_id: string;
}


export interface DeleteLoanCredit {
    id: string;
    // soma dos campos value_paid da tabela credit_payement de um loan_credit especifico
    // apenas se o campo value for igual ao valor restante, ou seja, o relultado da soma anterior
    // e que pode "eliminar", ou seja, concluir o loan_credit
    // logo em vez de ser um delete, passa a ser um update.
    value: number; 
    statusId: string;
}