import { Request, Response, NextFunction, Router } from "express";
import { createInsurance, deleteInsurance, getInsuranceById, getAllInsurances, updateInsurance } from "./";

export class InsuranceController {
  static async createInsurance(req: Request, res: Response, next: NextFunction): Promise<void> {
    return await createInsurance(req, res, next);
  }

  static async deleteInsurance(req: Request, res: Response, next: NextFunction): Promise<void> {
    return await deleteInsurance(req, res, next);
  }

  static async getInsuranceById(req: Request, res: Response, next: NextFunction): Promise<void> {
    return await getInsuranceById(req, res, next);
  }

  static async getAllInsurances(req: Request, res: Response, next: NextFunction): Promise<void> {
    return await getAllInsurances(req, res, next);
  }

  static async updateInsurance(req: Request, res: Response, next: NextFunction): Promise<void> {
    return await updateInsurance(req, res, next);
  }
}
