import { IResponse, IStatus} from "../../interface/";
import { createStatus, getStatusId, existStatusById } from "./";

export class StatusService {
  static async getStatusId(status: string):Promise<IResponse<IStatus | void>> {
    return await getStatusId(status);
  }

  static async createStatus(status: string): Promise<IResponse<IStatus>> {
    return await createStatus(status);
  }

  static async existStatusById(statusId:string): Promise<boolean> {
    return await existStatusById(statusId);
  }
}
  