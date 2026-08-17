import { account_type } from "../../models/account_type";
import { IAccountType, IResponse  } from "../../interface/"
import {CustomError} from "../../errors/"

export const deleteAccountType = async (type: string): Promise<IResponse<IAccountType>> => {
      try {
            const result = await account_type.destroy({
                  where:{
                        type: type,
                  },
            });
            return { code: 200, status: "success", type: type } as IResponse<IAccountType>;
      }
      catch (error: any) {
            throw new CustomError("DELETE_ACCOUNT_TYPE_FAILED", `Failed to delete account_type: ${error.message}`);
      }
};