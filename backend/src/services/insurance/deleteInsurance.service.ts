import { StatusService } from "../status/status.service";
import { IInsurance, IResponse } from "../../interface/";
import { CustomError } from "../../errors/";
import { insurance } from "../../models/insurance";

export const deleteInsurance = async (data: IInsurance.DeleteInsurance): Promise<IResponse<void>> => {
  try {
    const existingInsurance = await insurance.findOne({ where: { id: data.id } });
    if (!existingInsurance) {
      return { code: 404, status: "error", details: "Insurance not found" } as IResponse<void>;
    }

    const result = await insurance.destroy({
      where:{
            id: data.id,
      },
});
    return { code: 200, status: "success", details: "Insurance deleted successfully" } as IResponse<void>;
  } catch (error: any) {
    throw new CustomError("DELETE_INSURANCE_STATUS_FAILED", `Failed to delete insurance status: ${error.message}`);
  }
};
