import { loan_credit } from "../../models/loan_credit";
import { ILoanCredit, IResponse } from "../../interface/";
import { CustomError } from "../../errors/";

export const existLoanCreditById = async (loanCreditId: string): Promise<boolean> => {
  try {
    const result = await loan_credit.findOne({
      where: {
        id: loanCreditId,
      },
    });

    return !!result;
  } catch (error: any) {
    throw new CustomError("GET_LOAN_CREDIT_BY_ID", `Failed to get loan/credit id: ${error.message}`);
  }
};
