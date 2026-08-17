import { Request, Response, NextFunction } from "express";
import { UserService } from "../../services/";

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.getAllUsers();
    res.status(result.code).json(result);
  } catch (error) {
    next(error);
  }
};
