import { postal_code } from "../../models/postal_code";
import { IPostalCode, IResponse } from "../../interface/";
import { CustomError } from "../../errors/";
import { v4 as uuidv4 } from "uuid";

export const deletePostalCode = async (data: IPostalCode): Promise<IResponse<void>> => {
  try {
    const payload = await postal_code.destroy({
      where: {
        code: data.code,
        location: data.location,
      },
    });

    return { code: 200, status: "success", description: "Postal code deleted" } as IResponse<void>;
  } catch (error: any) {
    throw new CustomError("DELETE_POSTAL_CODE_FAILED", `Failed to delete postal_code: ${error.message}`);
  }
};
