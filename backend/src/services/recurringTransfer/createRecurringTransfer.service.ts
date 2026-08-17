import { v4 as uuidv4 } from "uuid";
import { CustomError } from "../../errors/";
import { PeriodTypeService } from "../periodType/periodType.service";
import { StatusService } from "../status/status.service";
import { BankAccountService } from "../bankAccount/bankAccount.service";
import { RecurringTransfer, IResponse } from "../../interface/";
import { recurring_transfer } from "../../models/recurring_transfer";

export const createRecurringTransfer = async (data: RecurringTransfer.ParsedRecurringTransfer): Promise<IResponse<RecurringTransfer.ResponseRecurringTransfer>> => {
  if( await BankAccountService.existBankAccountById(data.source_account_id) === false){
    return {
      status: "error",
      code: 400,
      description: "Bank Account with this IBAN doenst exists.",
    };
  }
  if( await BankAccountService.existBankAccountById(data.destination_account_id) === false){
    return {
      status: "error",
      code: 400,
      description: "Bank Account with this IBAN doenst exists.",
    };
  }

  if( await PeriodTypeService.existPeriodTypeById(data.periodTypeId) === false){
    return {
      status: "error",
      code: 400,
      description: "Period Type with this ID already exists.",
    };
  }

  if( await StatusService.existStatusById(data.statusId) === false){
    return {
      status: "error",
      code: 400,
      description: "Status with this ID already exists.",
    };
  }

  try {
      
    const Id = uuidv4();
    
    const payloadData = buildPayloadData(data,Id);
    
    await insertRecurringTransfer(payloadData);
    
    return {
      status: "success",
      code: 201,
      description: "Recurring transfer created successfully.",
      data: payloadData,
    };
  }catch (error: any) { 
  throw new CustomError("CREATE_RECURRING_TRANSFER_FAILED", `Failed to create recurring transfer: ${error.message}`);
 }
};
const insertRecurringTransfer = async (payloadData: any) => {
  let recurring_transferObj = { ...payloadData};
  const payload = await recurring_transfer.create(recurring_transferObj);
};
const buildPayloadData = (data: RecurringTransfer.ParsedRecurringTransfer, Id: string): any => {
  return {
    id: Id,
    period_type_id: data.periodTypeId,
    status_id: data.statusId,
    source_account_id: data.source_account_id,
    destination_account_id: data.destination_account_id,
    ammount: data.ammount,
    tax_fee: data.tax_fee,
    start_date: data.start_date,
    end_date: data.end_date,
    description: data.description,
  };
};