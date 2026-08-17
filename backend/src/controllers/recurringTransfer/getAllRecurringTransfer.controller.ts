import { Request, Response, NextFunction } from "express";
import { RecurringTransferService } from "../../services/";

export const getAllRecurringTransfers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RecurringTransferService.getAllRecurringTransfers();
    res.status(result.code).json(result);
  } catch (error) {
    next(error);
  }
};
