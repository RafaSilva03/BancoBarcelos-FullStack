import { period_type } from "../../models/period_type";
import { CustomError } from "../../errors/";

export const existPeriodTypeById = async (periodTypeId: string): Promise<boolean> => {
  try {
    const result = await period_type.findOne({
      where: {
        id: periodTypeId,
      },
    });

    return !!result;
  } catch (error: any) {
    throw new CustomError("EXIST_PERIOD_TYPE_BY_ID", `Failed to see if period type id exist : ${error.message}`);
  }
};