import { Request, Response, NextFunction } from "express";
import { InsuranceService } from "../../services/";
import { validateData } from "../../validator/data.validator";
import { getTokenData, getToken } from "../../middleware/auth.middleware";

export const updateInsurance = async (req: Request, res: Response, next: NextFunction) => {
  try {
   
    const token = getToken(req);
    const tokenData = getTokenData(token);

    if (!tokenData && tokenData.insuranceId) {
      res.status(404).json({ code: 401, status: "error", details: "Invalid insurance id on token" });
    }

    const insuranceID = req.params.id;

    let data: any = {};

    data = { insuranceId: insuranceID, ...req.body };
    await validateData(data, updateSchema());

    const result = await InsuranceService.updateInsurance(data);
    res.status(result.code).json(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
const updateSchema = (): any => {
  return {
    status_id: { type: "uuid", empty: false },
  };
};
