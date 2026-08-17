import { Request, Response, NextFunction, Router } from "express";
import { createCard, getCardById,getCards } from "./";



export class CardController {
  static async createCard(req: Request, res: Response, next: NextFunction): Promise<void> {
    return await createCard(req,res,next);
  }

  static async getCardById(req: Request, res: Response, next: NextFunction): Promise<void> {
    return await getCardById(req,res,next);
   }

   static async getCards(req: Request, res: Response, next: NextFunction): Promise<void> {
    return await getCards(req,res,next);
   }
}