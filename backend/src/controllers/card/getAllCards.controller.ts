import { Request, Response, NextFunction } from "express";
import { CardService } from "../../services/";

export const getCards = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CardService.getAllCards(req.params.id);
    res.status(result.code).json(result);
  } catch (error) {
    next(error);
  }
};