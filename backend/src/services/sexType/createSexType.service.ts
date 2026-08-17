import { sex_type } from "../../models/sex_type";
import { ISexType, IResponse } from "../../interface/";
import { CustomError } from "../../errors/";
import { v4 as uuidv4 } from "uuid";

export const createSexType = async (sex: string): Promise<IResponse<ISexType>> => {
  try {
    const id = uuidv4();

    const newSexType = await sex_type.create({
      id: id,
      type: sex,
    });

    return { code: 200, status: "success", data: newSexType.toJSON() } as IResponse<ISexType>;
  } catch (error: any) {
    throw new CustomError("CREATE_SEX_TYPE_FAILED", `Failed to create sex type: ${error.message}`);
  }
};
