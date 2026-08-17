import { insurance } from "../../models/insurance";
import { CustomError } from "../../errors/";

export const existInsuranceById = async (ID: string) => {
    try { 
      // console.log(ID)
      const result = await insurance.findOne({
        where: {
          id: ID
        }
      });
      return !!result;
    } catch (error: any) {
      throw new CustomError("EXIST_INSURANCE_BY_ID_FAILED", `Failed to get insurance by ID: ${error.message}`);
    }
  };
  