import { IPeriodType , IResponse} from "../../interface";
import { createPeriodType, getPeriodTypeId, existPeriodTypeById } from "./";

export class PeriodTypeService{
    static async getPeriodTypeId(type: string): Promise<IResponse<IPeriodType|void>>{
        return await getPeriodTypeId(type);  
      }

    static async createPeriodType(type: string): Promise<IResponse<IPeriodType>> {
        return await createPeriodType(type);
      }

      static async existPeriodTypeById(id: string): Promise<IResponse<IPeriodType>> {
        return await existPeriodTypeById(id);
      }
}