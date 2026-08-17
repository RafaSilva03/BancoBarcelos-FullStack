import { IAccountType , IResponse} from "../../interface";
import { createAccountType, getAccountTypeId, deleteAccountType,existAccountTypeById } from "./";

export class AccountTypeService{
    static async getAccountTypeId(type: string): Promise<IResponse<IAccountType|void>>{
        return await getAccountTypeId(type);  
      }

    static async createAccountType(type: string): Promise<IResponse<IAccountType>> {
        return await createAccountType(type);
      }

      static async deleteAccountType(type: string): Promise<IResponse<IAccountType>> {
        return await deleteAccountType(type);
      }

      static async existAccountTypeById(id: string): Promise<IResponse<IAccountType>> {
        return await existAccountTypeById(id);
      }
}