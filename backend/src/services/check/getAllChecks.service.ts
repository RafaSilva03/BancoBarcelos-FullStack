import { ICheck, IResponse  } from "../../interface/"
import {CustomError} from "../../errors/"
import { checks } from "../../models/checks";
import { status } from "../../models/status";
import { check_type } from "../../models/check_type";

export const getAllChecks = async (): Promise<IResponse<any>> => {   
    try {
      

      const allChecksData = await checks.findAll({
        include: [
          { model: check_type, as: "check_type", attributes: ["id", "type"] },
        ],
      });
      if (allChecksData.length > 0) { 
        const users = allChecksData.map((checkData) => ({
          check_number: checkData.check_number,
          value: checkData.value,
          emission_date: checkData.emission_date,
          account_number: checkData.account_number,
          check_type_id: checkData.check_type_id,
          accountType: { ...checkData.check_type.dataValues },
        }));

        return { code: 200, status: "success", description: "Users data retrieved", data: users } as IResponse<void>;
      }
      return { code: 404, status: "error", description: "Check data retrieved" } as IResponse<void>;
    }
     catch (error: any) { 
      throw new CustomError("GET_Check_FAILED", `Failed to get check: ${error.message}`);
    }
  };      
