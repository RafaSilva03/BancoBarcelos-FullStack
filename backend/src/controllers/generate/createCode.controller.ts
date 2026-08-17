import { Request, Response, NextFunction } from "express";
import { IResponse } from "../../interface";
import { validateData } from "../../validator/data.validator";
import { GenerateService } from "../../services/";
import { v4 as uuidv4 } from "uuid";
import { CustomError } from "../../errors/";

export const createCode = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const codeData: any = parseCodeData(req.body);
    await validateData(codeData, getCodeSchema());

    const result = await GenerateService.createCode(codeData);
    res.status(result.code).json(result);
  } catch (error) {
    next(error);
  }
};

const parseCodeData = (data: any): any => {
  return {
    account_number_id: data.account_number_id,
    used: data.used,
    exp_date: data.exp_date,
    ammount: data.ammount,
  };
};

const getCodeSchema = (): any => {
  return {
    account_number_id: { type: "uuid", empty: false },
    used: { type: "boolean" },
    exp_date: { type: "string", empty: false },
    ammount: { type: "number", empty: false },
  };
};
