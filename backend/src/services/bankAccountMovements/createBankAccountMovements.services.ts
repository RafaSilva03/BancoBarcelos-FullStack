import { v4 as uuidv4 } from "uuid";
import { CustomError } from "../../errors/";
import { TableNameService } from "../tableName/tableName.service";
import { IBankAccountMovements, IResponse } from "../../interface/";
import { bank_account_movements } from "../../models/bank_account_movements";

export const createBankAccountMovements = async (bankAccountMovements: any): Promise<IResponse<IBankAccountMovements>> => {
  try {
    const table_name = await TableNameService.getTableNameId(bankAccountMovements.table_name);

    const id = uuidv4();

    const payloadData = buildPayloadData(bankAccountMovements, table_name.data.id, id);

    await insertBankAccount(payloadData);

    return {
      status: "success",
      code: 201,
      description: "Bank account created successfully.",
      data: payloadData,
    };
  } catch (error: any) {
    throw new CustomError("CREATE_BANK_ACCOUNT_MOVEMENT_FAILED", `Failed to create bank account movement: ${error.message}`);
  }
};

const insertBankAccount = async (payloadData: any) => {
  let movementObj = { ...payloadData };

  const payload = await bank_account_movements.create(movementObj);
};

const buildPayloadData = (bankAccountMovements: any, table_name_id: string, id: string): any => {
  return {
    id: id,
    account_number_id: bankAccountMovements.account_number_id,
    movement_id: bankAccountMovements.movement_id,
    table_name_id: table_name_id,
    date: new Date().toISOString(),
    balance_history_id: bankAccountMovements.balance_history_id,
  };
};
