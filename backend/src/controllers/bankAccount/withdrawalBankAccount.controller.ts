import { Request, Response, NextFunction } from "express";
import { BankAccount, IResponse } from "../../interface";
import { BankAccountService } from "../../services/bankAccount/bankAccount.service";
import { validateData } from "../../validator/data.validator";

export const withdrawalBankAccount = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const bankAccountData = parseBankAccountData(req.body, req.params.id);
        await validateData(bankAccountData, getBankAccountSchema());
        const result = await BankAccountService.Withdrawal(bankAccountData);
        res.status(result.code).json(result);
    } catch (error) {
        next(error);
    }
};

const parseBankAccountData = (data: any, account_number: string): any => {
    return {
        account_number: account_number,
        ammount: data.ammount,
        date: new Date(data.date).toISOString(),
        atm_code: data.atm_code,
        description: data.description,
    };
};

const getBankAccountSchema = (): any => {
    return {
        account_number: {type: "string", empty: false},
        ammount: { type: "number", empty: false },
        atm_code: { type: "uuid", empty: false },
        description: { type: "string", empty: false},
        date: { type: "date", empty: false, convert: true },
    };
};