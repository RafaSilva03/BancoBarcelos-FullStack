import { IResponse, IHolder } from "../../interface/";
import { createHolder, getHolderId, existHolderById } from "./";

export class HolderService {
  static async getHolderId(type: string): Promise<IResponse<IHolder | void>> {
    return await getHolderId(type);
  }

  static async createHolder(type: string): Promise<IResponse<IHolder>> {
    return await createHolder(type);
  }

  static async existHolderById(sexTypeId: string): Promise<boolean> {
    return await existHolderById(sexTypeId);
  }
}
