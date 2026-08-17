import { period_type } from "../../models/period_type";
import { IPeriodType, IResponse  } from "../../interface/"
import {CustomError} from "../../errors/"


export const getPeriodTypeId = async (type: string): Promise<IResponse<IPeriodType | void>> => {   
    try {
         const result = await period_type.findOne({
          type : type,
         });

         return result ? ({ code: 200, status: "success", data: { id: result.id, type: result.type } } as IResponse<IPeriodType>) : ({ code: 400, status: "error" } as IResponse<void>);
    } catch (error: any) {
      throw new CustomError("GET_PERIOD_TYPE_FAILED", `Failed to get period_type: ${error.message}`);
    }
  };      