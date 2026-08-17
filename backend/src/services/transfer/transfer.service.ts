import { Transfer, IResponse } from "../../interface/";
import { createTransfer, existTransfer, getTransferById, getAllTransfers, transferTransaction } from "./";

export class TransferService {
  static async createTransfer(data: Transfer.ParsedTransfer): Promise<IResponse<Transfer.ResponseTransfer>> {
    return await createTransfer(data);
  }

  static async existTransfer(id: string): Promise<boolean> {
    return await existTransfer(id);
  }

  static async getTransferById(id: string): Promise<IResponse<Transfer.ResponseTransfer>> {
    return await getTransferById(id);
  }

  static async getAllTransfers(): Promise<IResponse<any>> {
    return await getAllTransfers();
  }

  static async transferTransaction(data: any): Promise<IResponse<any>> {
    return await transferTransaction(data);
  }
}
