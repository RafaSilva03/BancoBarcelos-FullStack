import { postal_code } from "../../models/postal_code";
import { IPostalCode, IResponse } from "../../interface/";
import { CustomError } from "../../errors/";
import { v4 as uuidv4 } from "uuid";

export const createPostalCode = async (data: IPostalCode): Promise<IResponse<IPostalCode>> => {
  try {
    const id = uuidv4();
    const payload = await postal_code.create({
      id: id,
      code: data.code,
      location: data.location,
    });

    return { code: 200, status: "success", data: { id, code: data.code, location: data.location } } as IResponse<IPostalCode>;
  } catch (error: any) {
    throw new CustomError("CREATE_POSTAL_CODE_FAILED", `Failed to create postal_code: ${error.message}`);
  }
};
