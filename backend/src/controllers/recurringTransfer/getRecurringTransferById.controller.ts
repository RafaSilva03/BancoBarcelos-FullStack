import { Request, Response, NextFunction } from "express";
import { RecurringTransferService } from "../../services"; 
import { validateData } from "../../validator/data.validator";

export const getRecurringTransfer  = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await validateData({ id: req.params.id }, { id: { type: "uuid" } });
    const result = await RecurringTransferService.getRecurringTransfer(req.params.id);
    res.status(result.code).json(result);
  } catch (error) {
    next(error);
  }
};