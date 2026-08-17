import { StatusService } from "../status/status.service";
import { IInsurance, IResponse } from "../../interface/";
import { CustomError } from "../../errors/";
import { insurance } from "../../models/insurance";

export const updateInsurance = async (data: IInsurance.UpdateInsurance): Promise<IResponse<void>> => {
  try {
    const existingInsurance = await insurance.findOne({ where: { id: data.id } });
    if (!existingInsurance) {
      return { code: 404, status: "error", details: "Insurance not found" } as IResponse<void>;
    }

    const existStatusId = await StatusService.existStatusById(data.statusId);
    if (!existStatusId) {
      return { code: 404, status: "error", details: "Invalid status ID" } as IResponse<void>;
    }

    const result = await insurance.update({ status_id: data.statusId }, { where: { id: data.id } });

    if (result[0] === 0) {
      return { code: 500, status: "error", details: "Failed to update insurance status" } as IResponse<void>;
    }

    return { code: 200, status: "success", details: "Insurance updated successfully" } as IResponse<void>;
  } catch (error: any) {
    throw new CustomError("UPDATE_INSURANCE_STATUS_FAILED", `Failed to update insurance status: ${error.message}`);
  }
};
