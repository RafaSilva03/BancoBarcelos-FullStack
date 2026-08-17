import { Request, Response, NextFunction, Router } from "express";
import { authentic } from "./";

export class AuthController {
  static async authentic(req: Request, res: Response, next: NextFunction): Promise<void> {
    return await authentic(req,res,next);
  }
}