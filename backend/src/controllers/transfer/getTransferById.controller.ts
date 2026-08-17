import { Request, Response, NextFunction } from "express";
import { TransferService } from "../../services"; 
import { validateData } from "../../validator/data.validator";

export const getTransferById  = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await validateData({ id: req.params.id }, { id: { type: "uuid" } });
    const result = await TransferService.getTransferById(req.params.id);
    res.status(result.code).json(result);
  } catch (error) {
    next(error);
  }
};