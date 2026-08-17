import { loan_credit } from "../../models/loan_credit";
import { CustomError } from "../../errors/";

export const existLoanCreditByBankAccount = async (account_number_id: string) => {
    try {
      const result = await loan_credit.findOne({
        where: {
          account_number_id: account_number_id
        }
      });
      return !!result;
    } catch (error: any) {
      throw new CustomError("EXIST_LOAN_CREDIT_BY_BANK_ACCOUNT_FAILED", `Failed to get loan/credit by bank account: ${error.message}`);
    }
  };
  