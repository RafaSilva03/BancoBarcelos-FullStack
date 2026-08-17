import { insurance_type } from "../../models/insurance_type";
import { CustomError } from "../../errors/";

export const existInsuranceTypeById = async (ID: string): Promise<boolean> => {
  try {
    const result = await insurance_type.findOne({
      where: {
        id: ID,
      },
    });

    return !!result;
  } catch (error: any) {
    throw new CustomError("EXIST_INSURANCE_TYPE_BY_ID", `Failed to see if insurance type id exists: ${error.message}`);
  }
};
