import { BankAccount, IResponse  } from "../../interface/"
import {CustomError} from "../../errors/"

import { bank_account } from "../../models/bank_account";
import { status } from "../../models/status";
import { account_type } from "../../models/account_type";

export const getAllBankAccounts = async (): Promise<IResponse<any>> => {   
    try {
      

      const allBankAccountsData = await bank_account.findAll({
        include: [
          { model: status, as: "status", attributes: ["id", "status"] },
          { model: account_type, as: "account_type", attributes: ["id", "type"] },
        ],
      });
      if (allBankAccountsData.length > 0) { 
        const users = allBankAccountsData.map((bankAccountData) => ({
          account_number: bankAccountData.account_number,
          Iban: bankAccountData.iban,
          current_balance: bankAccountData.current_balance,
          available_balance: bankAccountData.available_balance,
          opened_date: bankAccountData.opened_date,
          closed_date: bankAccountData.closed_date,
          status: { ...bankAccountData.status.dataValues },
          accountType: { ...bankAccountData.account_type.dataValues },
        }));
        return { code: 200, status: "success", description: "Users data retrieved", data: users } as IResponse<void>;
      }
      return { code: 404, status: "error", description: "Bank Account data retrieved" } as IResponse<void>;
    }
     catch (error: any) { 
      throw new CustomError("GET_Bank_Account_FAILED", `Failed to get bank account: ${error.message}`);
    }
  };      



  