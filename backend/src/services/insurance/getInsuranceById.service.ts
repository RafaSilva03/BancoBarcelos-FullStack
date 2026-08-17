import { IResponse } from "../../interface/";
import { CustomError } from "../../errors/";
import { insurance } from "../../models/insurance";
import { status } from "../../models/status";
import { insurance_type } from "../../models/insurance_type";


export const getInsuranceById = async (insuranceId: string): Promise<IResponse<any>> => {
  try {
    const existingInsurance = await insurance.findOne({ where: { id: insuranceId } });
    if (!existingInsurance) {
      return { code: 404, status: "error", details: "Insurance not found" } as IResponse<void>;
    }

    const insuranceData = await insurance.findOne({
      where: { id: insuranceId },
      include: [
        { model: status, as: "status", attributes: ["id", "status"] },
        { model: insurance_type, as: "insurance_type", attributes: ["id", "name"] },
      ],
    });

    if (insuranceData) {
      const obj = {
        id: insuranceData.id,
        details: insuranceData.detaisl,
        exp_date: insuranceData.exp_date,
        registration_date: insuranceData.registration_date,
        status: { ...insuranceData.status.dataValues },
        insuranceType: { ...insuranceData.insurance_type.dataValues },
        };
      return { code: 200, status: "success", description: "Insurance data retrieved", data: obj } as IResponse<void>;
    }
    return { code: 404, status: "error", description: "Insurance data not found" } as IResponse<void>;
  } catch (error: any) {
    throw new CustomError("GET_INSURANCE_BY_ID", `Failed to get the insurance: ${error.message}`);
  }
};
