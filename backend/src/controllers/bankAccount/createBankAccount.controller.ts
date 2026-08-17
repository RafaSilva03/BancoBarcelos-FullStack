import { Request, Response, NextFunction } from "express";
import { BankAccount, IResponse } from "../../interface";
import { BankAccountService } from "../../services/bankAccount/bankAccount.service";
import { validateData } from "../../validator/data.validator";
import { getTokenData, getToken } from "../../middleware/auth.middleware";

export const createBankAccount = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = getToken(req);
    const tokenData = getTokenData(token);

    if (!tokenData && tokenData.userId) {
      res.status(404).json({ code: 401, status: "error", details: "Invalid user id on token" });
    }

    const userID = tokenData.userId;

    const bankAccountData: BankAccount.ParsedBankAccount = parseBankAccountData(req.body,userID);
    await validateData(bankAccountData, getBankAccountSchema());
    const result = await BankAccountService.createBankAccount(bankAccountData);
    res.status(result.code).json(result);
  } catch (error) {
    next(error);
  }
};

const parseBankAccountData = (data: BankAccount.ParsedBankAccount, userID: string): BankAccount.ParsedBankAccount => {
  return {
    user_id: userID,
    holder_id: data.holder_id,
    iban: data.iban,
    current_balance: data.current_balance,
    available_balance: data.available_balance,
    accountTypeId: data.accountTypeId,
    opened_date: new Date(data.opened_date).toISOString(),
    statusId: data.statusId,
  };
};

const getBankAccountSchema = (): any => {
  return {
    holder_id: { type: "uuid", empty: false },
    iban: { type: "string", empty: false, max: 26 },
    current_balance: { type: "number", empty: false },
    available_balance: { type: "number", empty: false },
    accountTypeId: { type: "uuid", empty: false },
    opened_date: { type: "date", empty: false, convert: true },
    statusId: { type: "uuid", empty: false },
  };
};