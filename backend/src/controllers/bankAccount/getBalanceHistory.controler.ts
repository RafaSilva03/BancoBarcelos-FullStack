import { Request, Response, NextFunction } from "express";
import { BankAccountMovementsService } from "../../services";
import { BalanceHistoryService } from "../../services";

export const getBalanceHistory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const movements = await BankAccountMovementsService.getAllBankAccountMovements(req.params.id);
    const result = await BalanceHistoryService.getAllBalanceHistories(movements.data);
    res.status(result.code).json(result);
  } catch (error) {
    next(error);
  }
};