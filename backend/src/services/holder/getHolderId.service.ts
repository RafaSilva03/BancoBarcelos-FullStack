import { holder } from "../../models/holder";
import { IHolder, IResponse } from "../../interface/";
import { CustomError } from "../../errors/";

export const getHolderId = async (name: string): Promise<IResponse<IHolder | void>> => {
  try {
    const result = await holder.findOne({
      where: {
        name: name,
      },
    });

    return result ? ({ code: 200, status: "success", data: { id: result.id, name: name } } as IResponse<IHolder>) : ({ code: 400, status: "error" } as IResponse<void>);
  } catch (error: any) {
    throw new CustomError("GET_HOLDER_FAILED", `Failed to get holder id: ${error.message}`);
  }
};
