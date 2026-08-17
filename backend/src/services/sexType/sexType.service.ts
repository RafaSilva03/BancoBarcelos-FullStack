import { IResponse, ISexType } from "../../interface/";
import { createSexType, getSexTypeId, existSexTypeById } from "./";

export class SexTypeService {
  static async getSexTypeId(type: string): Promise<IResponse<ISexType | void>> {
    return await getSexTypeId(type);
  }

  static async createSexType(type: string): Promise<IResponse<ISexType>> {
    return await createSexType(type);
  }

  static async existSexTypeById(sexTypeId: string): Promise<boolean> {
    return await existSexTypeById(sexTypeId);
  }
}
