import { IInsurance, IResponse } from "../../interface/";
import { createInsurance, deleteInsurance, existInsuranceById, getAllInsurances, getInsuranceById, updateInsurance } from "./";

export class InsuranceService {
  static async createInsurance(data: IInsurance.ParsedInsurance): Promise<IResponse<IInsurance.ResponseInsurance>> {
    return await createInsurance(data);
  }
  static async existInsuranceById(ID: string): Promise<boolean> {
    return await existInsuranceById(ID);
  }

  static async deleteInsurance(data: IInsurance.DeleteInsurance): Promise<IResponse<void>> {
    return await deleteInsurance(data);
  }

  static async getInsuranceById(insuranceId: string): Promise<IResponse<any>> {
    return await getInsuranceById(insuranceId);
  }

  static async getAllInsurances(): Promise<IResponse<any>> {
    return await getAllInsurances();
  }

  static async updateInsurance(data:string): Promise<IResponse<any>> {
    return await updateInsurance(data);
  }
}
