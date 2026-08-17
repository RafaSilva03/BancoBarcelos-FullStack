import { ICreditPayment, IResponse } from "../../interface/";
import { CustomError } from "../../errors/";

import { credit_payment } from "../../models/credit_payment";
import { loan_credit } from "../../models/loan_credit";

export const getCreditPaymentById = async (id: string): Promise<IResponse<ICreditPayment | void>> => {
  try {
    const creditPaymentData = await credit_payment.findOne({
      include: [
        { model: loan_credit, as: "loan_credit", 
            attributes: ["id", "value", "start_date", "final_date", "terms", "tan", "taeg", "mtic"] },
      ],
      where: {
        id: id
      },
    });

    if (!creditPaymentData) {
      return { code: 404, status: "error", description: "Credit Payment not found" };
    }

    const creditPayment: ICreditPayment = {
        id: creditPaymentData.id,
        value_paid: creditPaymentData.value_paid,
        payment_date: creditPaymentData.payment_date,
        loan_credit: { ...creditPaymentData.loan_credit.dataValues },
    };

    return { code: 200, status: "success", description: "Credit Payment data retrieved", data: creditPayment };
  } catch (error: any) {
    throw new CustomError("GET_CREDIT_PAYMENT_BY_ID", `Failed to get credit payment by ID: ${error.message}`);
  }
};
