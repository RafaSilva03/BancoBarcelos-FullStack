import { IContact, IResponse } from "../../interface/";
import { createContact } from "./";

export class ContactService {
    static async createContact(userId: string, data: IContact[]): Promise<IResponse<IContact[]>> {
      return await createContact(userId, data);
    }
  }