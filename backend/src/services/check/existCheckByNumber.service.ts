import {CustomError} from "../../errors/"
import { checks } from "../../models/checks";


export const existCheckByNumber = async (Id: string) => {   
    try {
       const result = await checks.findOne({
        where: {
            check_number: Id,
        },
       });
       return !!result;
    } catch (error: any) {
      throw new CustomError("EXIST_CHECK_BY_IBAN_FAILED", `Failed to get check by checknumber: ${error.message}`);
    }
  }; 