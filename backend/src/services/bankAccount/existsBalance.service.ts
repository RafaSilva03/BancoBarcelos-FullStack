import {CustomError} from "../../errors/"
import { bank_account } from "../../models/bank_account";


export const existBalance = async (data: any) => {   
    try {
       const result = await bank_account.findOne({
        where: {
            account_number: data.id,
        },
       });
        
      if(!result){
        throw new CustomError("ACCOUNT_NOT_FOUND", "No account found with the provided ID.");
      }
      

      const exceedsAvailable = result.dataValues.available_balance > data.ammount;
      const exceedsCurrent =  data.ammount  < result.dataValues.current_balance;

      return exceedsAvailable && exceedsCurrent;

    } catch (error: any) {
      throw new CustomError("EXIST_BALANCE_FAILED", `Failed to see if enough amount exists: ${error.message}`);
    }
  }; 