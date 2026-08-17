import { CustomError } from "../../errors/";
import { credit_payment } from "../../models/credit_payment";

export const getTotalPaymentsForLoanCredit = async (loanCreditId: string): Promise<number> => {
  try {
    const totalPayments = await credit_payment.sum("value_paid", {
      where: {
        loan_credit_id: loanCreditId
      }
    });
    
    return totalPayments || 0; // Se não houver pagamentos, retornar 0

  } catch (error: any) {
    throw new CustomError("GET_TOTAL_PAYMENTS_FAILED", `Failed to get total payments for loan credit: ${error.message}`);
  }
};
