import { Request, Response, NextFunction } from "express";
import { TransferService } from "../../services/";

export const getAllTransfers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await TransferService.getAllTransfers();
    res.status(result.code).json(result);
  } catch (error) {
    next(error);
  }
};