import { ICheckType , IResponse} from "../../interface";
import { getCheckTypeId, createCheckType,deleteCheckType,existCheckTypeById  } from "."; 

export class CheckTypeService{
    static async getCheckTypeId(type: string): Promise<IResponse<ICheckType|void>>{
        return await getCheckTypeId(type);  
      }

    static async createCheckType(type: string): Promise<IResponse<ICheckType>> {
        return await createCheckType(type);
      }
      static async deleteCheckType(type: string): Promise<IResponse<ICheckType>> {
        return await deleteCheckType(type);
      }

      static async existCheckTypeById(id: string): Promise<IResponse<ICheckType>> {
        return await existCheckTypeById(id);
      }
}


