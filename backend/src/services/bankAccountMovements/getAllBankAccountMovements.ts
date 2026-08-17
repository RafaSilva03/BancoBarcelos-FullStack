import { BankAccount, IResponse  } from "../../interface/"
import {CustomError} from "../../errors/"

import { bank_account_movements } from "../../models/bank_account_movements";
import { table_name } from "../../models/table_name";

export const getAllBankAccountMovements = async (id: string): Promise<IResponse<any>> => {
    try {

      const AccountMovementsData = await bank_account_movements.findAll({
        where:{
          account_number_id: id,
        },
      });

      if (AccountMovementsData.length > 0) { 
        const movements = AccountMovementsData.map((movementData) => ({
          account_number: movementData.account_number,
          Id: movementData.id,
          table_name_id: movementData.table_name_id,
          movement_id: movementData.movement_id,
          date: movementData.date,
          balance_history_id: movementData.balance_history_id 
        }));
        return { code: 200, status: "success", description: "Bank Account Movements data retrieved", data: movements } as IResponse<void>;
      }
      return { code: 404, status: "error", description: "Bank Account Movements data retrieved" } as IResponse<void>;
    }
     catch (error: any) { 
      throw new CustomError("GET_Bank_Account_MOVEMENTS_FAILED", `Failed to get bank account movements: ${error.message}`);
    }
  };