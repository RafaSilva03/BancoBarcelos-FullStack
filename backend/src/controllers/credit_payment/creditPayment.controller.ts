import { Request, Response, NextFunction, Router } from "express";
import { createCreditPayment, getCreditPaymentById, getAllCreditPayments, getCreditPaymentsFromLoanCredit, getTotalPaymentsForLoanCredit } from "./";

export class CreditPaymentController {
  static async createCreditPayment(req: Request, res: Response, next: NextFunction): Promise<void> {
    await createCreditPayment(req,res,next);
  }

  static async getCreditPaymentById(req: Request, res: Response, next: NextFunction): Promise<void> {
    return await getCreditPaymentById(req,res,next);
  }

  static async getAllCreditPayments(req: Request, res: Response, next: NextFunction): Promise<void> {
    return await getAllCreditPayments(req,res,next);
  }

  static async getCreditPaymentsFromLoanCredit(req: Request, res: Response, next: NextFunction): Promise<void> {
    return await getCreditPaymentsFromLoanCredit(req,res,next);
  }

  static async getTotalPaymentsForLoanCredit(req: Request, res: Response, next: NextFunction): Promise<void> {
    return await getTotalPaymentsForLoanCredit(req,res,next);
  }

  /*static async endLoanCredit(req: Request, res: Response, next: NextFunction): Promise<void> {
   return await endLoanCredit(req,res,next);
  } 
  
  static async updateLoanCredit(req: Request, res: Response, next: NextFunction): Promise<void> {
    return await updateLoanCredit(req,res,next);
  }*/
}