import { IResponse, IInsuranceType } from "../../interface/";
import { createInsuranceType, getInsuranceTypeId, existInsuranceTypeById } from "./";

export class InsuranceTypeService {
  static async getInsuranceTypeId(name: string): Promise<IResponse<IInsuranceType | void>> {
    return await getInsuranceTypeId(name);
  }

  static async createInsuranceType(name: string): Promise<IResponse<IInsuranceType>> {
    return await createInsuranceType(name);
  }

  static async existInsuranceTypeById(ID: string): Promise<boolean> {
    return await existInsuranceTypeById(ID);
  }
}
