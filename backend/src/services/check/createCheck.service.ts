import { v4 as uuidv4 } from "uuid";
import { CustomError } from "../../errors/";
import {  BankAccountService, CheckService, CheckTypeService } from "../";
import { ICheck, IResponse } from "../../interface/";
import { checks } from "../../models/checks";
import { bank_account } from "../../models/bank_account";


export const createCheck = async (check: ICheck.ParsedCheck): Promise<IResponse<ICheck.ResponseCheck>> => {
  
  if (await CheckService.existCheckByNumber(check.check_number)) {
    return {
      status: "error",
      code: 400,
      description: "Check with this Number already exists.",
    };
  }
  
  if (!(await CheckTypeService.existCheckTypeById(check.check_type_id))) {
    return {
      status: "error",
      code: 404,
      description: "Invalid check_type id",
    };
  }

  if (!(await BankAccountService.existBankAccountById(check.account_number_id))) {
    return {
      status: "error",
      code: 404,
      description: "Invalid account_number",
    };
  }

  //verificar se tem dinheiro na conta e superior ao valor do check
   
  const haveBalance = await haveEnoughBalanceToTransfer(check.account_number_id, check.value);

  if (!haveBalance) {
    return {
      status: "error",
      code: 400,
      description: "Insufficient balance in the bank account to make the credit payment.",
    };

  }


  const { account_number_id, check_type_id } = check;
  
  try {
    const id = uuidv4();

    const payloadData = buildPayloadData(check, id);
    await insertCheck(payloadData);
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


const insertCheck = async (payloadData: any) => {
  let checktObj = { ...payloadData };

  const payload = await checks.create(checktObj);
};

const buildPayloadData = (check: ICheck, id: string): any => {
  return {
    id: id,
    check_number: check.check_number,
    value: check.value,
    emission_date: new Date().toISOString(),
    account_number_id: check.account_number_id,
    check_type_id: check.check_type_id,
  };
};


const haveEnoughBalanceToTransfer = async (account_number_id: string, amount: number): Promise<boolean> => {
  const account = await bank_account.findOne({ where: { account_number: account_number_id } });
  console.log(account);
  if (account) {
    const availableBalance = account.available_balance;
    const currentBalance = account.current_balance;
    const haveEnough = availableBalance >= amount && currentBalance >= amount;
    return haveEnough;
  } else {
    return false;
  }
};
