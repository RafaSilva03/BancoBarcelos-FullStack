import { holder } from "../../models/holder";
import { IHolder, IResponse } from "../../interface/";
import { CustomError } from "../../errors/";
import { v4 as uuidv4 } from "uuid";

export const createHolder = async (name: string): Promise<IResponse<IHolder>> => {
  try {
    const id = uuidv4();

    const newSexType = await holder.create({
      id: id,
      name: name,
    });

    return { code: 200, status: "success", data: newSexType.toJSON() } as IResponse<IHolder>;
  } catch (error: any) {
    throw new CustomError("CREATE_HOLDER_FAILED", `Failed to create holder: ${error.message}`);
  }
};
