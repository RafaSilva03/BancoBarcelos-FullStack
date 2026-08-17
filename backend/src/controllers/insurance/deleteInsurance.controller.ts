import { Request, Response, NextFunction } from "express";
import { IInsurance } from "../../interface";
import { InsuranceService } from "../../services";
import { validateData } from "../../validator/data.validator";

export const deleteInsurance = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data: IInsurance.DeleteInsurance = { id: req.params.id};

    await validateData(data, { id: { type: "uuid" }});
    const result = await InsuranceService.deleteInsurance(data);
    res.status(result.code).json(result);
  } catch (error) {
    next(error);
  }
};
