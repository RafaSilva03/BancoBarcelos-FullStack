import { loan_credit_type } from "../../models/loan_credit_type";
import { ILoanCreditType, IResponse  } from "../../interface/"
import { CustomError } from "../../errors/"


export const getLoanCreditTypeId = async (type: string): Promise<IResponse<ILoanCreditType | void>> => {   
    try {
         const result = await loan_credit_type.findOne({
          where:{
            type: type,
          },
         });

         return result ? ({ code: 200, status: "success", data: { id: result.id, type: result.type } } as IResponse<ILoanCreditType>) : ({ code: 400, status: "error" } as IResponse<void>);
    } catch (error: any) {
      throw new CustomError("GET_LOAN_CREDIT_TYPE_FAILED", `Failed to get loan_credit_type: ${error.message}`);
    }
  };