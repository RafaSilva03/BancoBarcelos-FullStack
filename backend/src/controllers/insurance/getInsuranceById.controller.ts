import { Request, Response, NextFunction } from "express";
import { InsuranceService } from "../../services/";
import { validateData } from "../../validator/data.validator";
import { getTokenData, getToken } from "../../middleware/auth.middleware";

export const getInsuranceById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    
    const token = getToken(req);
    const tokenData = getTokenData(token);

    if (!tokenData && tokenData.insuranceId) {
      res.status(404).json({ code: 401, status: "error", details: "Invalid insurance id on token" });
    }

    const insuranceID = req.params.id;

    await validateData({ id: insuranceID }, { id: { type: "uuid" } });
    const result = await InsuranceService.getInsuranceById(insuranceID);
    res.status(result.code).json(result);
  } catch (error) {
    next(error);
  }
};
