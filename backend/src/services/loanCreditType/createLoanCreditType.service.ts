import { loan_credit_type } from "../../models/loan_credit_type";
import { ILoanCreditType, IResponse  } from "../../interface/"
import { CustomError } from "../../errors/"
import { v4 as uuidv4 } from "uuid";

export const createLoanCreditType = async (type: string): Promise<IResponse<ILoanCreditType>> => {
      try {
            const id = uuidv4();
            const payload = await loan_credit_type.create({
                  id: id,
                  type: type,
            });

            return {code: 200, status: "success", data:{id, type: type}} as IResponse<ILoanCreditType>
      }
      catch (error: any) {
            throw new CustomError("CREATE_LOAN_CREDIT_TYPE_FAILED", `Failed to create loan_credit_type: ${error.message}`);
      }
};