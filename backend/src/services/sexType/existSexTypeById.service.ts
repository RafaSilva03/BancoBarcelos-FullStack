import { sex_type } from "../../models/sex_type";
import { CustomError } from "../../errors/";

export const existSexTypeById = async (sexTypeId: string): Promise<boolean> => {
  try {
    const result = await sex_type.findOne({
      where: {
        id: sexTypeId,
      },
    });

    return !!result;
  } catch (error: any) {
    throw new CustomError("EXIST_SEX_TYPE_BY_ID", `Failed to see if sex_type id exists: ${error.message}`);
  }
};
