import { v4 as uuidv4 } from "uuid";
import { CustomError } from "../../errors/";
import { BankAccountService } from "../bankAccount/bankAccount.service";
import { Transfer, IResponse } from "../../interface/";
import { transfer } from "../../models/transfer";

export const createTransfer = async (data: Transfer.ParsedTransfer): Promise<IResponse<Transfer.ResponseTransfer>> => {
  if ((await BankAccountService.existBankAccountById(data.source_account_id)) === false) {
    return {
      status: "error",
      code: 400,
      description: "Bank Account with this id doesnt exists",
    };
  }
  if ((await BankAccountService.existBankAccountById(data.destination_account_id)) === false) {
    return {
      status: "error",
      code: 400,
      description: "Bank Account with this id doesnt exists.",
    };
  }

  try {
    const Id = uuidv4();

    const payloadData = buildPayloadData(data, Id);

    await insertTransfer(payloadData);

    return {
      status: "success",
      code: 201,
      description: "Transfer created successfully.",
      data: payloadData,
    };
  } catch (error: any) {
    throw new CustomError("CREATE_TRANSFER_FAILED", `Failed to create  transfer: ${error.message}`);
  }
};
const insertTransfer = async (payloadData: any) => {
  let transferObj = { ...payloadData };
  const payload = await transfer.create(transferObj);
};
const buildPayloadData = (data: Transfer.ParsedTransfer, Id: string): any => {
  return {
    id: Id,
    source_account_id: data.source_account_id,
    destination_account_id: data.destination_account_id,
    ammount: data.ammount,
    tax_fee: data.tax_fee,
    date: new Date().toISOString(),
    description: data.description,
  };
};
