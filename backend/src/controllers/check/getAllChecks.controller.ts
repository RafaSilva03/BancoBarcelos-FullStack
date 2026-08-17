import { Request, Response, NextFunction } from "express";
import { CheckService } from "../../services"; 

export const getAllChecks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CheckService.getAllChecks();
    res.status(result.code).json(result);
  } catch (error) {
    next(error);
  }
}; 