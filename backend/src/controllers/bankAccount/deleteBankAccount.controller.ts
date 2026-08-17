import { Request, Response, NextFunction } from "express";
import { BankAccount, IResponse } from "../../interface";
import { BankAccountService } from "../../services/bankAccount/bankAccount.service";


export const deleteBankAccount = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const bankAccountData: BankAccount.DeleteBankAccount = parseBankAccountData(req.body, req.params.id);
        const result = await BankAccountService.deleteBankAccount(bankAccountData , req.params.id);
        res.status(result.code).json(result);
    } catch (error) {
        next(error);
    }
};

const parseBankAccountData = (data: any, id: any) => {
    return {
        account_number: id, 
        closed_date: new Date(data.closed_date).toISOString(),
        statusId: data.status_id, 
    };
};
