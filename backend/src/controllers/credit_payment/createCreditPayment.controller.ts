import { Request, Response, NextFunction } from "express";
import { ICreditPayment, IResponse } from "../../interface";
import { validateData } from "../../validator/data.validator";
import { CreditPaymentService, LoanCreditService } from "../../services/";
import { CustomError } from "../../errors";

export const createCreditPayment = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const creditPaymentData: ICreditPayment.ParsedCreditPayment = parseCreditPaymentData(req.body);
        await validateData(creditPaymentData, getCreditPaymentSchema());
        
        // Verificar se o valor do empréstimo foi totalmente pago
        const totalPayments = await CreditPaymentService.getTotalPaymentsForLoanCredit(creditPaymentData.loan_credit_id);
        const loanCredit = await LoanCreditService.getLoanCreditById(creditPaymentData.loan_credit_id);
        
        if (!loanCredit) {
            throw new CustomError("LOAN_CREDIT_NOT_FOUND", "Loan/Credit not found");
        }

        if (loanCredit.value <= totalPayments + creditPaymentData.value_paid) {
            return res.status(400).json({
                status: "error",
                code: 400,
                description: "Loan/Credit is fully paid. Cannot create new payment.",
            });
        }

        const result = await CreditPaymentService.createCreditPayment(creditPaymentData);
        res.status(result.code).json(result);
    } catch (error) {
        next(error);
    }
};

const parseCreditPaymentData = (data: any): ICreditPayment.ParsedCreditPayment => {
    return {
        value_paid: data.value_paid,
        loan_credit_id: data.loan_credit_id,
    };
};

const getCreditPaymentSchema = (): any => {
    return {
        value_paid: { type: 'number', empty: false },
        loan_credit_id: { type: 'uuid', empty: false },
    };
};
