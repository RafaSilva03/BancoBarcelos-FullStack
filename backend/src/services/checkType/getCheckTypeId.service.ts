import { ICheckType, IResponse } from "../../interface";   
import { CustomError } from "../../errors";
import { check_type } from "../../models/check_type";

export const getCheckTypeId = async (checkType: string): Promise<IResponse<ICheckType | void>> => {
  try {
    const result = await check_type.findOne({
      where: {
        type: checkType,
      },
    });

    return result ? ({ code: 200, status: "success", data: { id: result.id, type: checkType } } as IResponse<ICheckType>) : ({ code: 400, status: "error" } as IResponse<void>);
  } catch (error: any) {
    throw new CustomError("GET_CONTACT_TYPE_ID_FAILED", `Failed to get contact type id: ${error.message}`);
  }
};

    