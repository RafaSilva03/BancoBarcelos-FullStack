import { Request, Response, NextFunction } from "express";
import { BankAccountService } from "../../services/";

export const getAllBankAccounts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BankAccountService.getAllBankAccounts();
    res.status(result.code).json(result);
  } catch (error) {
    next(error);
  }
};