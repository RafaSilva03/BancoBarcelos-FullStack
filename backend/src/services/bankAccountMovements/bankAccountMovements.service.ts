import { IResponse, IBankAccountMovements } from "../../interface/";
import { createBankAccountMovements, getAllBankAccountMovements } from "./";

export class BankAccountMovementsService {
  static async createBankAccountMovements(data: any): Promise<IResponse<IBankAccountMovements | void>> {
    return await createBankAccountMovements(data);
  }

  static async getAllBankAccountMovements(id: string) {
    return await getAllBankAccountMovements(id);
  }
}
