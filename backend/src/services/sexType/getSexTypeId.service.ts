import { sex_type } from "../../models/sex_type";
import { ISexType, IResponse } from "../../interface/";
import { CustomError } from "../../errors/";

export const getSexTypeId = async (sexType: string): Promise<IResponse<ISexType | void>> => {
  try {
    const result = await sex_type.findOne({
      where: {
        type: sexType,
      },
    });

    return result ? ({ code: 200, status: "success", data: { id: result.id, type: sexType } } as IResponse<ISexType>) : ({ code: 400, status: "error" } as IResponse<void>);
  } catch (error: any) {
    throw new CustomError("GET_SEX_TYPE_FAILED", `Failed to get sex type id: ${error.message}`);
  }
};
