import {CustomError} from "../../errors/"
import { bank_account } from "../../models/bank_account";


export const existBankAccountById = async (Id: string) => {   
    try {
       const result = await bank_account.findOne({
        where: {
            account_number: Id,
        },
       });
       return !!result;
    } catch (error: any) {
      throw new CustomError("EXIST_BANK_ACCOUNT_BY_ID_FAILED", `Failed to get bank_account by id: ${error.message}`);
    }
  }; 