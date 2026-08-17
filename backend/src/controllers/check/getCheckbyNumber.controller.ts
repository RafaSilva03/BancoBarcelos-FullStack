import { Request, Response, NextFunction } from "express";
import { CheckService } from "../../services"; 
import { validateData } from "../../validator/data.validator";

export const getCheckByNumber = async (req: Request, res: Response, next: NextFunction) => {
  try {
     const checkNumber = req.params.checkNumber;
    await validateData({ checkNumber: checkNumber }, { checkNumber: { type:"string"} });
    const result = await CheckService.getCheckByNumber(checkNumber);
    res.status(result.code).json(result);
  } catch (error) {
    next(error);
  }
};
