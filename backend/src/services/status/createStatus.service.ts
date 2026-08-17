import { status } from "../../models/status";
import { IStatus, IResponse } from "../../interface/";
import { CustomError } from "../../errors/";
import { v4 as uuidv4 } from "uuid";

export const createStatus = async (statusName: string): Promise<IResponse<IStatus>> => {
  try {
    const id = uuidv4();

    const payload = await status.create({
      id: id,
      status: statusName,
    });

    return { code: 200, status: "success", data: { id, status: statusName } } as IResponse<IStatus>;
  } catch (error: any) {
    throw new CustomError("CREATE_STATUS_FAILED", `Failed to create status: ${error.message}`);
  }
};
