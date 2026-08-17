import { ICheckType, IResponse } from "../../interface";   
import { CustomError } from "../../errors";
import { check_type } from "../../models/check_type";

export const deleteCheckType = async (type: string): Promise<IResponse<ICheckType>> => {
      try {
            const result = await check_type.destroy({
                  where:{
                        type: type,
                  },
            });
            return { code: 200, status: "success", type: type } as IResponse<ICheckType>;
      }
      catch (error: any) {
            throw new CustomError("DELETE_CHECK_TYPE_FAILED", `Failed to delete account_type: ${error.message}`);
      }
};