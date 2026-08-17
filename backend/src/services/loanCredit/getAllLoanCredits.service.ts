import { ILoanCredit, IResponse } from "../../interface/";
import { CustomError } from "../../errors/";

import { loan_credit } from "../../models/loan_credit";
import { bank_account } from "../../models/bank_account";
import { loan_credit_type } from "../../models/loan_credit_type";
import { status } from "../../models/status";

export const getAllLoanCredits = async (): Promise<IResponse<any>> => {
  try {
    const allLoanCreditsData = await loan_credit.findAll({
      include: [
        { model: status, as: "status", attributes: ["id", "status"] },
        { model: loan_credit_type, as: "loan_credit_type", attributes: ["id", "type"] },
        { model: bank_account, as: "account_number", attributes: ["account_number"] },
      ],
    });

    if (allLoanCreditsData.length > 0) {
      const loanCredits = allLoanCreditsData.map((loanCreditData) => ({
        id: loanCreditData.id,
        value: loanCreditData.value,
        start_date: loanCreditData.start_date,
        final_date: loanCreditData.final_date,
        terms: loanCreditData.terms,
        status: { ...loanCreditData.status.dataValues },
        tan: loanCreditData.tan,
        taeg: loanCreditData.taeg,
        mtic: loanCreditData.mtic,
        account_number: { ...loanCreditData.account_number.dataValues },
        loanCreditType: { ...loanCreditData.loan_credit_type.dataValues },
      }));
      return { code: 200, status: "success", description: "Loan/Credits data retrieved", data: loanCredits } as IResponse<void>;
    }
    return { code: 404, status: "error", description: "No loan/credits found" } as IResponse<void>;
  } catch (error: any) {
    throw new CustomError("GET_ALL_LOAN/CREDITS", `Failed to get all loan/credits: ${error.message}`);
  }
};

