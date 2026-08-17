import { Sequelize } from "sequelize";
import { Transfer, IResponse } from "../../interface/";
import { CustomError } from "../../errors/";
import { bank_account } from "../../models/bank_account";
import { v4 as uuidv4 } from "uuid";
import { BalanceHistoryService, BankAccountMovementsService } from "../";

export const transferTransaction = async (data: any): Promise<IResponse<any>> => {
  try {
    const haveBalance = await haveEnoughBalanceTowithdraw(data.source_account_id, data.amount);

    if (!haveBalance) {
      console.log(`-----REFUSE TRANSFER-----\nThe source account doenst have enough money to transfer`);
      return;
    }

    let transData = { ...data };
    delete transData.transfer_id;

    const transactionResult = await transaction(transData);

    const sorce_account_balance_history_id = uuidv4();
    const destination_account_balance_history_id = uuidv4();

    await createHistory(transactionResult, {
      sorce_account_balance_history_id: sorce_account_balance_history_id,
      destination_account_balance_history_id: destination_account_balance_history_id,
    });

    const table_name = "transfer";

    let tmp = {
      source: {
        table_name: table_name,
        account_number_id: transData.source_account_id,
        balance_history_id: sorce_account_balance_history_id,
        movement_id: data.transfer_id,
      },
      dest: {
        table_name: table_name,
        account_number_id: transData.destination_account_id,
        balance_history_id: destination_account_balance_history_id,
        movement_id: data.transfer_id,
      },
    };

    await createBankMovements(tmp);

    console.log(`-----TRANSFER-----\n
    Source Account Id - ${transData.source_account_id}
    Destination Account Id - ${transData.destination_account_id}
    Amount to transferered - ${transData.amount}
    `);
  } catch (error: any) {
    throw new CustomError("GET_TRANSFER_FAILED", `Failed to get transfer: ${error.message}`);
  }
};

const createHistory = async (transactionResult: any, ids: any): Promise<any> => {
  let _transactionResult = transactionResult;
  await BalanceHistoryService.createBalanceHistory({ ..._transactionResult.source_account }, ids.sorce_account_balance_history_id);
  await BalanceHistoryService.createBalanceHistory({ ..._transactionResult.destination_account }, ids.destination_account_balance_history_id);
};

const createBankMovements = async (data: any): Promise<any> => {
  await BankAccountMovementsService.createBankAccountMovements(data.source);
  await BankAccountMovementsService.createBankAccountMovements(data.dest);
};

const transaction = async (data: any): Promise<any> => {
  const { source_account_id, destination_account_id, amount } = data;

  try {
    const sourceAccountBefore = await bank_account.findOne({
      attributes: ["current_balance", "available_balance"],
      where: { account_number: source_account_id },
    });

    const destinationAccountBefore = await bank_account.findOne({
      attributes: ["current_balance", "available_balance"],
      where: { account_number: destination_account_id },
    });

    await bank_account.update(
      {
        current_balance: Sequelize.literal(`current_balance - ${amount}`),
        available_balance: Sequelize.literal(`available_balance - ${amount}`),
      },
      {
        where: { account_number: source_account_id },
        returning: true,
      }
    );

    await bank_account.update(
      {
        current_balance: Sequelize.literal(`current_balance + ${amount}`),
        available_balance: Sequelize.literal(`available_balance + ${amount}`),
      },
      {
        where: { account_number: destination_account_id },
        returning: true,
      }
    );

    const sourceAccountAfter = await bank_account.findOne({
      attributes: ["current_balance", "available_balance"],
      where: { account_number: source_account_id },
    });

    const destinationAccountAfter = await bank_account.findOne({
      attributes: ["current_balance", "available_balance"],
      where: { account_number: destination_account_id },
    });

    if (sourceAccountBefore && sourceAccountAfter && destinationAccountBefore && destinationAccountAfter) {
      let aux = {
        source_account: {
          balance_before: sourceAccountBefore.dataValues.current_balance,
          balance_after: sourceAccountAfter.dataValues.current_balance,
        },
        destination_account: {
          balance_before: destinationAccountBefore.dataValues.current_balance,
          balance_after: destinationAccountAfter.dataValues.current_balance,
        },
      };

      return aux;
    }
  } catch (error) {
    console.error("Erro ao atualizar conta bancária:", error);
    throw error;
  }
};
export const haveEnoughBalanceTowithdraw = async (account_number_id: string, amount: number): Promise<boolean> => {
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
