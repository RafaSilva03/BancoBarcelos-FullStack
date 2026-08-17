import { account_type } from "../../models/account_type";
import { IAccountType, IResponse  } from "../../interface/"
import {CustomError} from "../../errors/"


export const getAccountTypeId = async (type: string): Promise<IResponse<IAccountType | void>> => {   
    try {
         const result = await account_type.findOne({
          where:{
            type: type,
          },
         });

         return result ? ({ code: 200, status: "success", data: { id: result.id, type: result.type } } as IResponse<IAccountType>) : ({ code: 400, status: "error" } as IResponse<void>);
    } catch (error: any) {
      throw new CustomError("GET_ACCOUNT_TYPE_FAILED", `Failed to get account_type: ${error.message}`);
    }
  };      