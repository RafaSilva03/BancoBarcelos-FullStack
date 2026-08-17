import { v4 as uuidv4 } from "uuid";
import { CustomError } from "../../errors/";
import { IWithdrawalDeposit, IResponse } from "../../interface/";
import { withdraw_deposit_atm } from "../../models/withdraw_deposit_atm";
import { bank_account } from "../../models/bank_account";
import { BankAccountService } from "./bankAccount.service";

export const Balance = async (balance: any): Promise<IResponse<any>> => {
  try {
    const Entry = await bank_account.findOne({
      where: { account_number: balance.account_number },
    });

    if (!Entry) {
      throw new CustomError("ACCOUNT_NOT_FOUND", "The specified account number does not exist.");
    }

    let currentBalanceA, availableBalanceA;

    if (balance.sign === "-") {
      currentBalanceA = Entry.current_balance - balance.ammount;
      availableBalanceA = Entry.available_balance - balance.ammount;
    } else if (balance.sign === "+") {
      currentBalanceA = Entry.current_balance + balance.ammount;
      availableBalanceA = Entry.available_balance + balance.ammount;
    }

    const currentBalance = Entry.current_balance;
    const availableBalance = Entry.available_balance;

    await bank_account.update(
      {
        current_balance: currentBalanceA,
        available_balance: availableBalanceA,
      },
      {
        where: { account_number: balance.account_number },
      }
    );

    const buildPayloadData = {
      id: balance.id,
      ammount: balance.ammount,
      sign: balance.sign,
      atm_code: balance.atm_code,
      date: balance.date,
      description: balance.description,
      current_balance: currentBalance,
      available_balance: availableBalance,
      current_balanceA: currentBalanceA,
      available_balanceA: availableBalanceA,
      account_number: balance.account_number,
    };

    return {
      status: "success",
      code: 201,
      description: "Deposit successfully made.",
      data: buildPayloadData,
    };
  }catch (error: any) { 
  throw new CustomError("BALANCE_FAILED", `Failed to make changes to the balance: ${error.message}`);
 }

};
