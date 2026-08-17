import { period_type } from "../../models/period_type";
import { IPeriodType, IResponse  } from "../../interface/"
import {CustomError} from "../../errors/"
import { v4 as uuidv4 } from "uuid";

export const createPeriodType = async (type: string): Promise<IResponse<IPeriodType>> => {
      try {
            const id = uuidv4();
            const payload = await period_type.create({
                  id: id,
                  type: type,
            });

            return {code: 200, status: "success", data:{id, type: type}} as IResponse<IPeriodType>
      }
      catch (error: any) {
            throw new CustomError("CREATE_PERIOD_TYPE_FAILED", `Failed to create period_type: ${error.message}`);
      }
};