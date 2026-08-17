import { Request, Response, NextFunction } from "express";
import { IResponse } from "../../interface";
import { validateData } from "../../validator/data.validator";
import { GenerateService } from "../../services/";
import { v4 as uuidv4 } from "uuid";
import { CustomError } from "../../errors/";

export const useCode = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await validateData({ code: req.params.code }, { code: { type: "string", empty: false } });
    const result = await GenerateService.useCode(req.params.code);
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
