import { Request, Response, NextFunction } from "express";
import { CreditPaymentService } from "../../services/";

export const getAllCreditPayments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CreditPaymentService.getAllCreditPayments();
    res.status(result.code).json(result);
  } catch (error) {
    next(error);
  }
};
