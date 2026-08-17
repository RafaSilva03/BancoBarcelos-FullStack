
import { CustomError } from "../../errors/";
import { check_type } from "../../models/check_type";

export const existCheckTypeById = async (check_type_id: string): Promise<boolean> => {
  try {
    const result = await check_type.findOne({
      where: {
        id: check_type_id,
      },
    });

    return !!result;
  } catch (error: any) {
    throw new CustomError("EXIST_CHECK_TYPE_BY_ID", `Failed to see if check_type id exists: ${error.message}`);
  }
};
