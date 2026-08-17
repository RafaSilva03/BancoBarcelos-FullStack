import { insurance_type } from "../../models/insurance_type";
import { IInsuranceType, IResponse } from "../../interface/";
import { CustomError } from "../../errors/";

export const getInsuranceTypeId = async (name: string): Promise<IResponse<IInsuranceType | void>> => {
  try {
    const result = await insurance_type.findOne({
      where: {
        name: name,
      },
    });

    return result ? ({ code: 200, status: "success", data: { id: result.id, name: name } } as IResponse<IInsuranceType>) : ({ code: 400, status: "error" } as IResponse<void>);
  } catch (error: any) {
    throw new CustomError("GET_INSURANCE_TYPE_FAILED", `Failed to get insurance type id: ${error.message}`);
  }
};
