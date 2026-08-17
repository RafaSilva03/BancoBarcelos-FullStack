import { v4 as uuidv4 } from "uuid";
import { CustomError } from "../../errors/";
import { StatusService, BankAccountService, AccountTypeService, HolderService} from "../";
import { BankAccount, IResponse } from "../../interface/";
import { bank_account } from "../../models/bank_account";
import { user_bank_connector } from "../../models/user_bank_connector";


export const createBankAccount = async (bank_account: BankAccount.ParsedBankAccount): Promise<IResponse<BankAccount.ResponseBankAccount>> => {
  
  
  if ((await StatusService.existStatusById(bank_account.statusId)) === false) {
    return {
      status: "error",
      code: 404,
      description: "Invalid status id",
    };
  }

  if ((await StatusService.existStatusById(bank_account.statusId)) === false) {
    return {
      status: "error",
      code: 404,
      description: "Invalid status id",
    };
  }

  if ((await AccountTypeService.existAccountTypeById(bank_account.accountTypeId)) === false) {
    return {
      status: "error",
      code: 404,
      description: "Invalid account type id",
    };
  }

  const { statusId, accountTypeId } = bank_account;
  try {
      
    const id = uuidv4();
    const account_number = uuidv4();

    const Data = PayloadData(bank_account, id, account_number);
      
    const payloadData = buildPayloadData(bank_account, account_number);

  
    await insertBankAccount(payloadData);
    await insertConnector(Data);

    return {
      status: "success",
      code: 201,
      description: "Bank account created successfully.",
      data: payloadData,
    };
  }catch (error: any) { 
  throw new CustomError("CREATE_BANK_ACCOUNT_FAILED", `Failed to create bank account: ${error.message}`);
 }
};

const insertConnector = async (payloadData: any) => {
  let connectorObj = { ...payloadData};

  const payload = await user_bank_connector.create(connectorObj);
};

const insertBankAccount = async (payloadData: any) => {
  let bank_accountObj = { ...payloadData};

  const payload = await bank_account.create(bank_accountObj);
};


const PayloadData = (bank_account: BankAccount.ParsedBankAccount, id: string, account_number: string): any => {
  return {
    id: id,
    user_id: bank_account.user_id,
    holder_id: bank_account.holder_id,
    account_number_id: account_number, 
  };
}; 


const buildPayloadData = (bank_account: BankAccount.ParsedBankAccount, account_number: string): any => {
  return {
    account_number: account_number,
    iban: bank_account.iban,
    current_balance: bank_account.current_balance,
    available_balance: bank_account.available_balance,
    account_type_id: bank_account.accountTypeId,
    opened_date: new Date().toISOString(),
    status_id: bank_account .statusId,
  };
}; 

