import { IInsurance, IResponse } from "../../interface/";
import { v4 as uuidv4 } from "uuid";
import { CustomError } from "../../errors/";
import Bcrypt from "../../bcrypt/bcrypt.hash";
import { InsuranceService, InsuranceTypeService, StatusService } from "../";
import { insurance } from "../../models/insurance";

export const createInsurance = async (insurance: IInsurance.ParsedInsurance): Promise<IResponse<IInsurance.ResponseInsurance>> => {
  console.log(insurance.insurance_type_id)

  if ((await StatusService.existStatusById(insurance.status_id)) === false) {
    return {
      status: "error",
      code: 404,
      description: "Invalid status id",
    };
  }
console.log(insurance.insurance_type_id)
  if ((await InsuranceTypeService.existInsuranceTypeById(insurance.insurance_type_id)) === false) {
    return {
      status: "error",
      code: 404,
      description: "Invalid insurance type id",
    };
  }

  try {
    const insuranceId = uuidv4();
    const payloadData = buildPayloadData(insurance, insuranceId);

    await insertInsurance(payloadData);

    console.log(payloadData)

    return {
      status: "success",
      code: 201,
      description: "Insurance created successfully.",
      data: payloadData,
    };
  } catch (error: any) {
    throw new CustomError("CREATE_INSURANCE_FAILED", `Failed to create insurance: ${error.message}`);
  }
};

const insertInsurance = async (payloadData: any) => {
  let insuranceObj = { ...payloadData };

  const payload = await insurance.create(insuranceObj);
};

const buildPayloadData = (insurance: IInsurance.ParsedInsurance, insuranceId: string): any => {
  return {
    id: insuranceId,
    detaisl: insurance.detaisl,
    exp_date: new Date().toISOString(),
    registration_date: new Date().toISOString(),
    status_id: insurance.status_id,
    insurance_type_id: insurance.insurance_type_id,
  };
};
