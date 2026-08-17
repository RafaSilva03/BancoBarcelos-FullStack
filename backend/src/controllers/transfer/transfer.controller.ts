import { Request, Response, NextFunction, Router } from "express";
import { createTransfer, getAllTransfers, getTransferById} from "./"

export class TransferController {
    
    static async createTransfer(req: Request, res: Response, next: NextFunction): Promise<void> {
        return await createTransfer(req,res,next);
      }

    static async getAllTransfers(req: Request, res: Response, next: NextFunction): Promise<void> {
      return await getAllTransfers(req,res,next);
    }

    static async getTransferById(req: Request, res: Response, next: NextFunction): Promise<void> {
      return await getTransferById(req,res,next);
    }
}
    