import { insurance_type } from "../../models/insurance_type";
import { IInsuranceType, IResponse } from "../../interface/";
import { CustomError } from "../../errors/";
import { v4 as uuidv4 } from "uuid";

export const createInsuranceType = async (name: string): Promise<IResponse<IInsuranceType>> => {
  try {
    const id = uuidv4();

    const newInsuranceType = await insurance_type.create({
      id: id,
      name: name,
    });

    return { code: 200, status: "success", data: newInsuranceType.toJSON() } as IResponse<IInsuranceType>;
  } catch (error: any) {
    throw new CustomError("CREATE_INSURANCE_TYPE_FAILED", `Failed to create insurance type: ${error.message}`);
  }
};
