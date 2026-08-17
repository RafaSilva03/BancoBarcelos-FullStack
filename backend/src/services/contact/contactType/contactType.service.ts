import { IContactType, IResponse } from "../../../interface/";
import { getContactTypeId, createContactType } from "./";

export class ContactTypeService {
  static async getContactTypeId(type: string): Promise<IResponse<IContactType | void>> {
    return await getContactTypeId(type);
  }

  static async createContactType(type: string): Promise<IResponse<IContactType>> {
    return await createContactType(type);
  }
}
