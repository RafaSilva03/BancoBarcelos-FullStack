import { Request, Response, NextFunction, Router } from "express";
import { createUser, deleteUser, getUserById, getAllUsers, updateUser } from "./";

export class UserController {
  static async createUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    return await createUser(req, res, next);
  }

  static async deleteUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    return await deleteUser(req, res, next);
  }

  static async getUserById(req: Request, res: Response, next: NextFunction): Promise<void> {
    return await getUserById(req, res, next);
  }

  static async getAllUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
    return await getAllUsers(req, res, next);
  }

  static async updateUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    return await updateUser(req, res, next);
  }
}
