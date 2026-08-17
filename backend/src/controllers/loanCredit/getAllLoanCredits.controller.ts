import { Request, Response, NextFunction } from "express";
import { LoanCreditService } from "../../services/";

export const getAllLoanCredits = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await LoanCreditService.getAllLoanCredits();
    res.status(result.code).json(result);
  } catch (error) {
    next(error);
  }
};
