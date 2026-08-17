import { IResponse } from "../../interface/";
import { createCode, useCode, getCodeDataByCode } from "./";

export class GenerateService {
  static async createCode(data: any): Promise<IResponse<any>> {
    return await createCode(data);
  }

  static async useCode(code: string): Promise<IResponse<any>> {
    return await useCode(code);
  }

  static async getCodeDataByCode(code: string): Promise<any> {
    return await getCodeDataByCode(code);
  }
}
