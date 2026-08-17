import { Request, Response, NextFunction, Router } from "express";
import { createLoanCredit, getLoanCreditById, getAllLoanCredits } from "./";

export class LoanCreditController {
  static async createLoanCredit(req: Request, res: Response, next: NextFunction): Promise<void> {
    return await createLoanCredit(req,res,next);
  }

  static async getLoanCreditById(req: Request, res: Response, next: NextFunction): Promise<void> {
    return await getLoanCreditById(req,res,next);
  }

  static async getAllLoanCredits(req: Request, res: Response, next: NextFunction): Promise<void> {
    return await getAllLoanCredits(req,res,next);
  }
}