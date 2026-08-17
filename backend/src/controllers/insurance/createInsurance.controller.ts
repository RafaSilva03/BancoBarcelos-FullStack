import { Request, Response, NextFunction } from "express";
import { IInsurance, IResponse } from "../../interface";
import { validateData } from "../../validator/data.validator";
import { InsuranceService } from "../../services/";
import { v4 as uuidv4 } from "uuid";
import { CustomError } from "../../errors/";

export const createInsurance = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const insuranceData: IInsurance.ParsedInsurance = parseInsuranceData(req.body);
    await validateData(insuranceData, getInsuranceSchema());
    const result = await InsuranceService.createInsurance(insuranceData);
    res.status(result.code).json(result);
  } catch (error) {
    next(error);
  }
};

const parseInsuranceData = (data: any): IInsurance.ParsedInsurance => {
  return {
    detaisl: data.details,
    exp_date: new Date(data.exp_date).toISOString(),
    registration_date: new Date(data.registration_date).toISOString(),
    status_id: data.status_id,
    insurance_type_id: data.insurance_type_id
  };
};

const getInsuranceSchema = (): any => {
  return {
    detaisl: { type: "string", empty: false, max: 100 },
    exp_date: { type: "date", empty: false, convert: true },
    registration_date: { type: "date", empty: false, convert: true },
    status_id: { type: "uuid", empty: false },
    insurance_type_id: { type: "uuid", empty: false },
  };
};
