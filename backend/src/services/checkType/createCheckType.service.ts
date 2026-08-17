
import { check_type } from "../../models/check_type";
import { ICheckType, IResponse  } from "../../interface"
import {CustomError} from "../../errors"
import { v4 as uuidv4 } from "uuid";

export const createCheckType = async (type: string): Promise<IResponse<ICheckType>> => {
      try {
            const id = uuidv4();
            const newCheckType = await check_type.create({
                  id: id,
                  type: type,
            });

            return {code: 200, status: "success", data:newCheckType.toJSON() } as IResponse<ICheckType>
      }
      catch (error: any) {
            throw new CustomError("CREATE_PERIOD_TYPE_FAILED", `Failed to create period_type: ${error.message}`);
      }
};

