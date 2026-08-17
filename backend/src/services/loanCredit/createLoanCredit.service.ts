import { v4 as uuidv4 } from "uuid";
import { ValidationError, CustomError } from "../../errors/";
import { LoanCreditService, StatusService, BankAccountService, LoanCreditTypeService} from "../";
import { ILoanCredit, IResponse } from "../../interface/";
import { loan_credit } from "../../models/loan_credit";


export const createLoanCredit = async (loanCredit: ILoanCredit.ParsedLoanCredit): Promise<IResponse<ILoanCredit.ResponseLoanCredit>> => {
  if ((await StatusService.existStatusById(loanCredit.status_id)) === false) {
    return {
      status: "error",
      code: 404,
      description: "Invalid status id",
    };
  }

  if ((await BankAccountService.existBankAccountById(loanCredit.account_number_id)) === false) {
    return {
      status: "error",
      code: 404,
      description: "Invalid bank account id",
    };
  }

  if ((await LoanCreditTypeService.existLoanCreditTypeById(loanCredit.loan_credit_type_id)) === false) {
    return {
      status: "error",
      code: 404,
      description: "Invalid loan credit type id",
    };
  }

  if ((await LoanCreditService.existLoanCreditByBankAccount(loanCredit.account_number_id)) === true) {
    return {
      status: "error",
      code: 400,
      description: "Bank account already has a loan/credit associated.",
    };
  }
  
  const { status_id, account_number_id, loan_credit_type_id } = loanCredit;
  
  try {
    const id = uuidv4();

    const payloadData = buildPayloadData(loanCredit, id);
    await insertLoanCredit(payloadData);

    console.log(payloadData);

    return {
      status: "success",
      code: 201,
      description: "Loan/credit created successfully.",
      data: payloadData,
    };
  }catch (error: any) { 
  throw new CustomError("CREATE_LOAN_CREDIT_FAILED", `Failed to create loan/credit: ${error.message}`);
 }
};

const insertLoanCredit = async (payloadData: any) => {
  let loanCreditObj = { ...payloadData};

  const payload = await loan_credit.create(loanCreditObj);
};

const buildPayloadData = (loanCredit: any, id: string): any => {
  return {
    id: id,
    value: loanCredit.value,
    start_date: new Date().toISOString(),
    final_date: loanCredit.final_date,
            terms: loanCredit.terms,
    tan: loanCredit.tan,
    taeg: loanCredit.taeg,
    mtic: loanCredit.mtic,
    status_id: loanCredit.status_id,
    account_number_id: loanCredit.account_number_id,
    loan_credit_type_id: loanCredit.loan_credit_type_id,
  }

}