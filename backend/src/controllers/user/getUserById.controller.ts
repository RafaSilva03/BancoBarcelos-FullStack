import { Request, Response, NextFunction } from "express";
import { UserService } from "../../services/";
import { validateData } from "../../validator/data.validator";
import { getTokenData, getToken } from "../../middleware/auth.middleware";

export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    
    const token = getToken(req);
    const tokenData = getTokenData(token);

    if (!tokenData && tokenData.userId) {
      res.status(404).json({ code: 401, status: "error", details: "Invalid user id on token" });
    }

    const userID = tokenData.userId;

   

    await validateData({ id: userID }, { id: { type: "uuid" } });
    const result = await UserService.getUserById(userID);
    res.status(result.code).json(result);
  } catch (error) {
    next(error);
  }
};
