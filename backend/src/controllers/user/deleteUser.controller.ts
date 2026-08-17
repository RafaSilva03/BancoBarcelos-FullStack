import { Request, Response, NextFunction } from "express";
import { User } from "../../interface";
import { UserService } from "../../services/";
import { validateData } from "../../validator/data.validator";

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data: User.DeleteUser = { id: req.params.id, statusId: req.body.statusId };

    await validateData(data, { id: { type: "uuid" }, statusId: { type: "uuid" } });
    const result = await UserService.deleteUser(data);
    res.status(result.code).json(result);
  } catch (error) {
    next(error);
  }
};
