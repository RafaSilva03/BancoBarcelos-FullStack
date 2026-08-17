import { ILoanCreditType , IResponse} from "../../interface";
import { createLoanCreditType, getLoanCreditTypeId, existLoanCreditTypeById } from "./";

export class LoanCreditTypeService{
    static async createLoanCreditType(type: string): Promise<IResponse<ILoanCreditType|void>>{
        return await createLoanCreditType(type);  
      }

      static async getLoanCreditTypeId(type: string): Promise<IResponse<ILoanCreditType>> {
        return await getLoanCreditTypeId(type);
      }

      static async existLoanCreditTypeById(loanCreditTypeId: string): Promise<boolean> {
        return await existLoanCreditTypeById(loanCreditTypeId);
      }
}