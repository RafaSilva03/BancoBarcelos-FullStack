import {CustomError} from "../../errors/"
import { transfer } from "../../models/transfer";


export const existTransfer = async (id: string) => {   
    try {
       const result = await transfer.findOne({
        where: {
            id: id,
        },
       });
       return !!result;
    } catch (error: any) {
      throw new CustomError("EXIST_TRANSFER", `Failed to see if transfer exist: ${error.message}`);
    }
  }; 