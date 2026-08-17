import { ICreditPayment, IResponse } from "../../interface/";
import { CustomError } from "../../errors/";

import { credit_payment } from "../../models/credit_payment";
import { loan_credit } from "../../models/loan_credit";

export const getAllCreditPayments = async (): Promise<IResponse<any>> => {
  try {
    const allCreditPaymentsData = await credit_payment.findAll({
      include: [
        { model: loan_credit, as: "loan_credit", 
            attributes: ["id", "value", "start_date", "final_date", "terms", "tan", "taeg", "mtic"] },
      ],
    });

    if (allCreditPaymentsData.length > 0) {
      const creditPayments = allCreditPaymentsData.map((creditPaymentData) => ({
        id: creditPaymentData.id,
        value_paid: creditPaymentData.value_paid,
        payment_date: creditPaymentData.payment_date,
        loan_credit: { ...creditPaymentData.loan_credit.dataValues },
      }));
      return { code: 200, status: "success", description: "Credit Payment data retrieved", data: creditPayments } as IResponse<void>;
    }
    return { code: 404, status: "error", description: "No credit payments found" } as IResponse<void>;
  } catch (error: any) {
    throw new CustomError("GET_ALL_CREDIT_PAYMENTS", `Failed to get all credit payments: ${error.message}`);
  }
};

