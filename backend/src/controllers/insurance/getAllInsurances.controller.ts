import { Request, Response, NextFunction } from "express";
import { InsuranceService } from "../../services/";

export const getAllInsurances = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await InsuranceService.getAllInsurances();
    res.status(result.code).json(result);
  } catch (error) {
    next(error);
  }
};
