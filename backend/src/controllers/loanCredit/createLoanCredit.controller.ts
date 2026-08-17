import { Request, Response, NextFunction } from "express";
import { ILoanCredit, IResponse } from "../../interface";
import { validateData } from "../../validator/data.validator";
import { LoanCreditService } from "../../services/";
import { v4 as uuidv4 } from "uuid";
import { loan_credit_type } from "../../models/loan_credit_type";


export const createLoanCredit = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const loanCreditData: ILoanCredit.ParsedLoanCredit = parseLoanCreditData(req.body);
        await validateData(loanCreditData, getLoanCreditSchema());
        const result = await LoanCreditService.createLoanCredit(loanCreditData);
        res.status(result.code).json(result);
      } catch (error) {
        next(error);
      }
};

const parseLoanCreditData = (data: any): ILoanCredit.ParsedLoanCredit => {
    return {
        value: data.value,
        start_date: new Date(),
        final_date: data.final_date,
        terms: data.terms,
        status_id: data.status_id,
        tan: data.tan,
        taeg: data.taeg,
        mtic: data.mtic,
        account_number_id: data.account_number_id,
        loan_credit_type_id: data.loan_credit_type_id,
    };
};

const getLoanCreditSchema = (): any => {
    return {
        value: { type: 'number', empty: false },
        final_date: { type: 'date', empty: false, convert: true },
        terms: { type: 'string', empty: false },
        status_id: { type: "uuid", empty: false },
        tan: { type: 'number', empty: false },
        taeg: { type: 'number', empty: false },
        mtic: { type: 'number', empty: false },
        account_number_id: { type: 'uuid', empty: false },
        loan_credit_type_id: { type: 'uuid', empty: false },
    };
  };