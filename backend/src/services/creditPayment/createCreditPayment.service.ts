import { v4 as uuidv4 } from "uuid";
import { ValidationError, CustomError } from "../../errors/";
import { CreditPaymentService, LoanCreditService, BankAccountService } from "../";
import { ICreditPayment, IResponse } from "../../interface/";
import { credit_payment } from "../../models/credit_payment";
import { bank_account } from "../../models/bank_account";

export const createCreditPayment = async (creditPayment: ICreditPayment.ParsedCreditPayment): Promise<IResponse<ICreditPayment.ResponseCreditPayment>> => {
  try {
    // Verificar se o valor do empréstimo foi totalmente pago
    const totalPayments = await CreditPaymentService.getTotalPaymentsForLoanCredit(creditPayment.loan_credit_id);

    const loanCreditResponse = await LoanCreditService.getLoanCreditById(creditPayment.loan_credit_id);
    const loanCredit = loanCreditResponse.data;

    //console.log("Ola " + loanCredit.account_number);

    /*if (loanCredit) {
      console.log(loanCredit.value);
    } else {
      console.log("Loan credit not found.");
    }

    console.log(totalPayments);

    console.log(loanCredit.value - totalPayments);

    console.log(creditPayment.value_paid);

    console.log(creditPayment.value_paid - (loanCredit.value - totalPayments));*/

    let exceedingValue = creditPayment.value_paid - (loanCredit.value - totalPayments);

    //console.log(exceedingValue);

    if (loanCredit.value === totalPayments) {
      return {
        status: "warning",
        code: 400,
        description: "Loan/Credit is fully paid. Cannot create new payment.",
      };
    }

    // Ajustar o valor do pagamento se exceder o montante total do crédito
    if (totalPayments + creditPayment.value_paid > loanCredit.value) {
      creditPayment.value_paid = loanCredit.value - totalPayments;
      // ver se e possivel 
    }

    if ((await LoanCreditService.existLoanCreditById(creditPayment.loan_credit_id)) === false) {
      return {
        status: "error",
        code: 404,
        description: "Invalid loan credit type id",
      };
    }

    const haveBalance = await haveEnoughBalanceToTransfer(loanCredit.account_number.account_number, creditPayment.value_paid);

    if (!haveBalance) {
      return {
        status: "error",
        code: 400,
        description: "Insufficient balance in the bank account to make the credit payment.",
      };
    }

    // Continuar com a criação do pagamento
    const id = uuidv4();
    const payloadData = buildPayloadData(creditPayment, id);
    await insertCreditPayment(payloadData);

    const withDrawBalanceData = { account_number: loanCredit.account_number.account_number, ammount: creditPayment.value_paid, sign: "-" };

    if (await BankAccountService.Balance(withDrawBalanceData) === false) {
      return {
        status: "error",
        code: 400,
        description: "Failed to withdraw balance from bank account!",
      };
    }
    
    //console.log(payloadData);

    // Verificar se o valor do pagamento excede o montante total do crédito
    const message = exceedingValue > 0 ? {warning: `The amount entered exceeds what is necessary to finalize the credit!\nThe amount worth ${exceedingValue}€ has been returned to your account!`} : false;
    
    if (message) {
      // Remove '\n' from the message.warning
      message.warning = message.warning.replace(/\n/g, ' ');
      console.log(message.warning);
    }

    return {
      status: "success",
      code: 201,
      description: "Credit Payment created successfully.",
      data: message != false ? { ...payloadData, ...message } : payloadData,
    };
  } catch (error: any) {
    throw new CustomError("CREATE_CREDIT_PAYMENT_FAILED", `Failed to create credit payment: ${error.message}`);
  }
};

const insertCreditPayment = async (payloadData: any) => {
  let creditPaymentObj = { ...payloadData};

  const payload = await credit_payment.create(creditPaymentObj);
};

const buildPayloadData = (creditPayment: any, id: string): any => {
  return {
    id: id,
    value_paid: creditPayment.value_paid,
    payment_date: new Date().toISOString(),
    loan_credit_id: creditPayment.loan_credit_id,
  };
};

const haveEnoughBalanceToTransfer = async (account_number_id: string, amount: number): Promise<boolean> => {
  const account = await bank_account.findOne({ where: { account_number: account_number_id } });

  if (account) {
    const availableBalance = account.available_balance;
    const currentBalance = account.current_balance;
    const haveEnough = availableBalance >= amount && currentBalance >= amount;
    return haveEnough;
  } else {
    return false;
  }
};
