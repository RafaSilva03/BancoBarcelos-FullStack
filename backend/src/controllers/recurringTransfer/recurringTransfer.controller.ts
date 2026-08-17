import { Request, Response, NextFunction, Router } from "express";
import { createRecurringTransfer, searchRecurringTransfer, getAllRecurringTransfers, getRecurringTransfer } from "./";

export class RecurringTransferController {
  static async createRecurringTransfer(req: Request, res: Response, next: NextFunction): Promise<void> {
    return await createRecurringTransfer(req, res, next);
  }

  static async getAllRecurringTransfers(req: Request, res: Response, next: NextFunction): Promise<void> {
    return await getAllRecurringTransfers(req, res, next);
  }

  static async getRecurringTransfer(req: Request, res: Response, next: NextFunction): Promise<void> {
    return await getRecurringTransfer(req, res, next);
  }
  static async searchRecurringTransfer(): Promise<void> {
    return await searchRecurringTransfer();
  }
}
