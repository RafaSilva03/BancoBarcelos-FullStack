import {CustomError} from "../../errors/"
import { recurring_transfer } from "../../models/recurring_transfer";


export const existRecurringTransfer = async (id: string) => {   
    try {
       const result = await recurring_transfer.findOne({
        where: {
            id: id,
        },
       });
       return !!result;
    } catch (error: any) {
      throw new CustomError("EXIST_RECURRING_TRANSFER", `Failed to get recurring transfer: ${error.message}`);
    }
  }; 