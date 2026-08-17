import { ILoanCredit, IResponse } from "../../interface/";
import { CustomError } from "../../errors/";

import { loan_credit } from "../../models/loan_credit";
import { bank_account } from "../../models/bank_account";
import { loan_credit_type } from "../../models/loan_credit_type";
import { status } from "../../models/status";

export const getLoanCreditById = async (id: string): Promise<IResponse<ILoanCredit | void>> => {
  try {
    const loanCreditData = await loan_credit.findOne({
      include: [
        { model: status, as: "status", attributes: ["id", "status"] },
        { model: loan_credit_type, as: "loan_credit_type", attributes: ["id", "type"] },
        { model: bank_account, as: "account_number", attributes: ["account_number"] },
      ],
      where: {
        id: id
      },
    });

    if (!loanCreditData) {
      return { code: 404, status: "error", description: "Loan/Credit not found" };
    }

    const loanCredit: ILoanCredit = {
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
    };

    return { code: 200, status: "success", description: "Loan/Credit data retrieved", data: loanCredit };
  } catch (error: any) {
    throw new CustomError("GET_LOAN_CREDIT_BY_ID", `Failed to get loan/credit by ID: ${error.message}`);
  }
};
