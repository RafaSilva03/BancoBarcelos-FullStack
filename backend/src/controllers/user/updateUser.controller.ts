import { Request, Response, NextFunction } from "express";
import { UserService } from "../../services/";
import { validateData } from "../../validator/data.validator";
import { getTokenData, getToken } from "../../middleware/auth.middleware";

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
   
    const token = getToken(req);
    const tokenData = getTokenData(token);

    if (!tokenData && tokenData.userId) {
      res.status(404).json({ code: 401, status: "error", details: "Invalid user id on token" });
    }

    const userID = tokenData.userId;

    let data: any = {};

    data = { userId: userID, ...req.body };
    await validateData(data, updateSchema());

    const result = await UserService.updateUserById(data);
    res.status(result.code).json(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
const updateSchema = (): any => {
  return {
    pronoun_id: { type: "uuid", empty: false, optional: true },
    sex_type_id: { type: "uuid", empty: false, convert: true, optional: true },
    address: { type: "string", empty: false, max: 255, optional: true },
    postal_code: {
      type: "object",
      optional: true,
      props: {
        code: { type: "string", empty: false, pattern: /^\d{4}-\d{3}$/ },
        location: { type: "string", empty: false },
      },
    },
  };
};
