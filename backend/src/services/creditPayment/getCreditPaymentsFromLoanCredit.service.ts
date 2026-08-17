import { ICreditPayment, IResponse } from "../../interface/";
import { CustomError } from "../../errors/";

import { credit_payment } from "../../models/credit_payment";
import { loan_credit } from "../../models/loan_credit";

export const getCreditPaymentsFromLoanCredit = async (id: string): Promise<IResponse<ICreditPayment | void>> => {
  try {
    const creditPaymentData = await credit_payment.findOne({
      include: [
        { model: loan_credit, as: "loan_credit", 
            attributes: ["id", "value", "start_date", "final_date", "terms", "tan", "taeg", "mtic"] },
      ],
      where: {
        loan_credit_id: id
      },
    });

    if (!creditPaymentData) {
      return { code: 404, status: "error", description: "No Credit Payment found that belongs to that loan/credit" };
    }

    const creditPayment: ICreditPayment = {
        id: creditPaymentData.id,
        value_paid: creditPaymentData.value_paid,
        payment_date: creditPaymentData.payment_date,
        loan_credit: { ...creditPaymentData.loan_credit.dataValues },
    };

    return { code: 200, status: "success", description: "Credit Payment from Loan Credit data retrieved", data: creditPayment };
  } catch (error: any) {
    throw new CustomError("GET_CREDIT_PAYMENT_FROM_LOAN_CREDIT", `Failed to get credit payment from loan/credit: ${error.message}`);
  }
};
