import { Sequelize } from "sequelize";
import { IResponse } from "../../interface/";
import { v4 as uuidv4 } from "uuid";
import { CustomError } from "../../errors/";
import { BankAccountService, BalanceHistoryService, BankAccountMovementsService } from "../";
import { getCodeDataByCode } from "./getCodeById.service";
import { generated_code } from "../../models/generated_code";
import { bank_account } from "../../models/bank_account";
import { haveEnoughBalanceTowithdraw } from "../transfer/transferTransaction.service";

export const useCode = async (code: string): Promise<IResponse<any>> => {
  try {
    const codeData = await getCodeDataByCode(code);

    if (codeData.status === "error") {
      return {
        status: "error",
        code: 404,
        description: "The generated code are invalid",
      };
    }

    if (codeData.data.used === true) {
      return {
        status: "error",
        code: 404,
        description: "The generated code has already used",
      };
    }

    const haveBalance = await haveEnoughBalanceTowithdraw(codeData.data.account_number_id, codeData.data.ammount);

    if (!haveBalance) {
      return {
        status: "error",
        code: 403,
        description: "Insufficient balance to complete the transfer.",
      };
    }

    const result = await rewardCode(codeData.data);
    const history_id = uuidv4();

    await BalanceHistoryService.createBalanceHistory(result, history_id);

    const obj = {
      table_name: "generated-code",
      account_number_id: codeData.data.account_number_id,
      balance_history_id: history_id,
      movement_id: codeData.data.id,
    };
    await BankAccountMovementsService.createBankAccountMovements(obj);

    return { code: 200, status: "success", description: "The withdrawal has been successfully completed." };
  } catch (error: any) {
    throw new CustomError("CREATE_USER_FAILED", `Failed to create user: ${error.message}`);
  }
};

const rewardCode = async (codeData: any) => {
  const result = generated_code.update({ used: true }, { where: { id: codeData.id } });

  const accountBefore = await bank_account.findOne({
    attributes: ["current_balance", "available_balance"],
    where: { account_number: codeData.account_number_id },
  });

  const removeMoney = await bank_account.update(
    {
      current_balance: Sequelize.literal(`current_balance - ${codeData.ammount}`),
      available_balance: Sequelize.literal(`available_balance - ${codeData.ammount}`),
    },
    {
      where: { account_number: codeData.account_number_id },
      returning: true,
    }
  );

  const accountAfter = await bank_account.findOne({
    attributes: ["current_balance", "available_balance"],
    where: { account_number: codeData.account_number_id },
  });

  if (accountBefore && accountAfter) {
    let aux = {
      balance_before: accountBefore.dataValues.current_balance,
      balance_after: accountAfter.dataValues.current_balance,
    };

    return aux;
  }
};
