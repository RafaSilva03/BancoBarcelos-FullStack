import { Request, Response, NextFunction, Router } from "express";
import { createBankAccount, deleteBankAccount, getAllBankAccounts, getBankAccountById, depositBankAccount, withdrawalBankAccount, getBalanceHistory} from "./";



export class BankAccountController {
  static async createBankAccount(req: Request, res: Response, next: NextFunction): Promise<void> {
    return await createBankAccount(req,res,next);
  }

  static async deleteBankAccount(req: Request, res: Response, next: NextFunction): Promise<void> {
   return await deleteBankAccount(req,res,next);
  }

  static async getAllBankAccounts(req: Request, res: Response, next: NextFunction): Promise<void> {
    return await getAllBankAccounts(req,res,next);
   }

   static async getBankAccountById(req: Request, res: Response, next: NextFunction): Promise<void> {
    return await getBankAccountById(req,res,next);
   }

   static async depositBankAccount(req: Request, res: Response, next: NextFunction): Promise<void> {
    return await depositBankAccount(req,res,next);
   }

   static async withdrawalBankAccount(req: Request, res: Response, next: NextFunction): Promise<void> {
    return await withdrawalBankAccount(req,res,next);
   }

   static async getBalanceHistory(req: Request, res: Response, next: NextFunction): Promise<void> {
    return await getBalanceHistory(req,res,next);
   }
}