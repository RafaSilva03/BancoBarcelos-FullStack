import { balance_history } from "../../models/balance_history";
import { IBalanceHistory, IResponse  } from "../../interface/"
import {CustomError} from "../../errors/"


export const getBalanceHistoryId = async (id: string): Promise<IResponse<IBalanceHistory | void>> => {   
    try {
         const result = await balance_history.findOne({
          where:{
            id: id,
          },
         });

         return result ? ({ code: 200, status: "success", data:{id, balance_before: result.balance_before, balance_after: result.balance_after} } as IResponse<IBalanceHistory>) : ({ code: 400, status: "error" } as IResponse<void>);
    } catch (error: any) {
      throw new CustomError("GET_BALANCE_HISTORY_FAILED", `Failed to get balance history: ${error.message}`);
    }
  };      