import { status } from "../../models/status";
import { IStatus, IResponse } from "../../interface/";
import { CustomError } from "../../errors/";

export const existStatusById = async (statusId: string): Promise<boolean> => {
  try {
    const result = await status.findOne({
      where: {
        id: statusId,
      },
    });

    return !!result;
  } catch (error: any) {
    throw new CustomError("GET_STATUS_BY_ID", `Failed to get status id: ${error.message}`);
  }
};
