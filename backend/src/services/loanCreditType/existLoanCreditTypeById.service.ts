import { loan_credit_type } from "../../models/loan_credit_type";
import { ILoanCreditType, IResponse  } from "../../interface/"
import { CustomError } from "../../errors/"

export const existLoanCreditTypeById = async (loanCreditTypeId: string): Promise<boolean> => {
  try {
    const result = await loan_credit_type.findOne({
      where: {
        id: loanCreditTypeId,
      },
    });

    return !!result;
  } catch (error: any) {
    throw new CustomError("GET_LOAN_CREDIT_TYPE_BY_ID", `Failed to get loan/credit type id: ${error.message}`);
  }
};
