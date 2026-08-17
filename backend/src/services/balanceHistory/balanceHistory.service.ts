import { IBalanceHistory , IResponse} from "../../interface";
import { createBalanceHistory, getBalanceHistoryId , getAllBalanceHistories} from "./";

export class BalanceHistoryService{
    
static async getAllBalanceHistories(movements: any): Promise<IResponse<IBalanceHistory|void>>{
        return await getAllBalanceHistories(movements);
      }

    static async createBalanceHistory(data: any, id: string): Promise<IResponse<IBalanceHistory>> {
        return await createBalanceHistory(data, id);
      }

      static async getBalanceHistoryId(id: string): Promise<IResponse<IBalanceHistory>> {
        return await getBalanceHistoryId(id);
      }
}