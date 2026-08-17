import { Request, Response, NextFunction, Router } from "express";
import { createCode, useCode } from "./";

export class GenerateCode {
  static async createCode(req: Request, res: Response, next: NextFunction): Promise<void> {
    return await createCode(req, res, next);
  }

  static async useCode(req: Request, res: Response, next: NextFunction): Promise<void> {
    return await useCode(req, res, next);
  }
}
