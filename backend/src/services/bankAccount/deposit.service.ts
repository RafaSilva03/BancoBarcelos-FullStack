import { v4 as uuidv4 } from "uuid";
import { CustomError } from "../../errors/";
import { IWithdrawalDeposit, IResponse } from "../../interface/";
import { withdraw_deposit_atm } from "../../models/withdraw_deposit_atm";
import { BankAccountService } from "./bankAccount.service";
import { BalanceHistoryService } from "../balanceHistory/balanceHistory.service";
import { BankAccountMovementsService } from "../bankAccountMovements/bankAccountMovements.service";

export const Deposit = async (deposit: any): Promise<IResponse<IWithdrawalDeposit>> => {
  
  if( await BankAccountService.existBankAccountById(deposit.account_number) === false){
    return {
      status: "error",
      code: 400,
      description: "Bank account with this IBAN doesnt exists.",
    };
  }

  try {
      
    //console.log(deposit)
    const id = uuidv4();
    const balance_history_id = uuidv4();
    let sign = "+";
    let name = "withdraw-deposit";
    const payloadData = buildPayloadData(deposit, id, sign, deposit.account_number);

    const movement = {
      account_number: deposit.account_number,
      movement_id: id,
      table_name: name,
      balance_history_id: balance_history_id,
    }

    await makeDeposit(payloadData, movement, balance_history_id);
    
    return {
      status: "success",
      code: 201,
      description: "Deposit successfully made.",
      data: payloadData,
    };
  }catch (error: any) { 
  throw new CustomError("DEPOSIT_FAILED", `Failed to deposit: ${error.message}`);
 }
};

const makeDeposit = async (payloadData: any, movement: any, balance_history_id: string) => {
  let depositObj = { ...payloadData};
  await withdraw_deposit_atm.create(depositObj);
  const Balance = await BankAccountService.Balance(depositObj);
  await BalanceHistoryService.createBalanceHistory(Balance.data, balance_history_id);
  await BankAccountMovementsService.createBankAccountMovements(movement);
};

const buildPayloadData = (deposit: IWithdrawalDeposit, id: string, sign: string, account_number: string): any => {
  return {
    account_number: account_number,
    id: id,
    ammount: deposit.ammount,
    sign: sign,
    atm_code: deposit.atm_code,
    date: new Date().toISOString(),
    description: deposit.description,
  };
}; 
