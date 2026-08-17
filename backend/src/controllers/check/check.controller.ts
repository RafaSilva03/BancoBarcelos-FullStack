import { Request, Response, NextFunction, Router } from "express";
import { createCheck, getAllChecks, getCheckByNumber } from "./";



export class CheckController {
  static async createCheck(req: Request, res: Response, next: NextFunction): Promise<void> {
    return await createCheck(req,res,next);
  }

  static async getAllChecks(req: Request, res: Response, next: NextFunction): Promise<void> {
   return await getAllChecks(req,res,next);
  }

  static async getCheckByNumber(req: Request, res: Response, next: NextFunction): Promise<void> {
    return await getCheckByNumber(req,res,next);
   }


   
}