import { IResponse } from "../../interface/";
import { CustomError } from "../../errors/";
import { insurance } from "../../models/insurance";
import { status } from "../../models/status";
import { insurance_type } from "../../models/insurance_type";

export const getAllInsurances = async (): Promise<IResponse<any>> => {
  try {
    const allInsurancesData = await insurance.findAll({
      include: [
        { model: status, as: "status", attributes: ["id", "status"] },
        { model: insurance_type, as: "insurance_type", attributes: ["id", "name"] },
      ],
    });

    if (allInsurancesData.length > 0) {
      const insurances = allInsurancesData.map((insuranceData) => ({
        id: insuranceData.id,
        details: insuranceData.detaisl,
        exp_date: insuranceData.exp_date,
        registration_date: insuranceData.registration_date,
        status: { ...insuranceData.status.dataValues },
        insuranceType: { ...insuranceData.insurance_type.dataValues },
      }));
      return { code: 200, status: "success", description: "Insurances data retrieved", data: insurances } as IResponse<void>;
    }
    return { code: 404, status: "error", description: "No insurances found" } as IResponse<void>;
  } catch (error: any) {
    throw new CustomError("GET_ALL_INSURANCES", `Failed to get all insurances: ${error.message}`);
  }
};
