import { status } from "../../models/status";
import { IStatus, IResponse } from "../../interface/";
import { CustomError } from "../../errors/";

export const getStatusId = async (statusName: string): Promise<IResponse<IStatus | void>> => {
  try {
    const result = await status.findOne({
      where: {
        status: statusName,
      },
    });
    
    return result ? ({ code: 200, status: "success", data: { id: result.id, status: statusName } } as IResponse<IStatus>) : ({ code: 400, status: "error" } as IResponse<void>);
  } catch (error: any) {
    throw new CustomError("CREATE_STATUS_FAILED", `Failed to get status id: ${error.message}`);
  }
};
