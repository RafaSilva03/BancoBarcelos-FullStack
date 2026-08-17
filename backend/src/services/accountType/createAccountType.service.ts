import { account_type } from "../../models/account_type";
import { IAccountType, IResponse  } from "../../interface/"
import {CustomError} from "../../errors/"
import { v4 as uuidv4 } from "uuid";

export const createAccountType = async (type: string): Promise<IResponse<IAccountType>> => {
      try {
            const id = uuidv4();
            const newAccountType = await account_type.create({
                  id: id,
                  type: type,
            });

            return {code: 200, status: "success", data:newAccountType.toJSON() } as IResponse<IAccountType>
      }
      catch (error: any) {
            throw new CustomError("CREATE_ACCOUNT_TYPE_FAILED", `Failed to create account_type: ${error.message}`);
      }
};