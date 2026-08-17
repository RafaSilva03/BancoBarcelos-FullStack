import { IPostalCode, IResponse } from "../../interface/";
import { getPostalCodeId, createPostalCode, deletePostalCode } from "./";

export class PostalCodeService {
  static async getPostalCodeId(code: string): Promise<IResponse<IPostalCode | void>> {
    return await getPostalCodeId(code);
  }

  static async createPostalCode(data: IPostalCode): Promise<IResponse<IPostalCode>> {
    return await createPostalCode(data);
  }

  static async deletePostalCode(data: IPostalCode): Promise<IResponse<IPostalCode>> {
    return await deletePostalCode(data);
  }
}