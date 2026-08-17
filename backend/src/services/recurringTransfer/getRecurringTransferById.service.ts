import { RecurringTransfer, IResponse  } from "../../interface/"
import {CustomError} from "../../errors/"

import { recurring_transfer } from "../../models/recurring_transfer";
import { period_type } from "../../models/period_type";
import { bank_account } from "../../models/bank_account";
import { status } from "../../models/status";


export const getRecurringTransferById = async (id: string): Promise<IResponse<any>> => {   
    try {

      const existingRecurringTransfer = await recurring_transfer.findOne({ where: { id: id } });
      if (!existingRecurringTransfer) {
      return { code: 404, status: "error", details: "Recurring Transfer not found" } as IResponse<void>;
    }

    const recurringTransferData = await recurring_transfer.findOne({
      where: { id: id },
      include: [
        { model: period_type, as: "period_type", attributes: ["id", "type"] },
        { model: status, as: "status", attributes: ["id", "name"] },
        { model: bank_account, as: "source_account", attributes: ["account_number", "iban", "current_balance", "available_balance", "opened_date", "closed_date"] },
        { model: bank_account, as: "destination_account", attributes: ["account_number", "iban", "current_balance", "available_balance", "opened_date", "closed_date"] },
      ],
    });
    if (recurringTransferData) {
      const obj = {
        id: recurringTransferData.id,
        ammount: recurringTransferData.ammount,
        tax_fee: recurringTransferData.tax_fee,
        start_date: recurringTransferData.start_date,
        end_date: recurringTransferData.end_date,
        description: recurringTransferData.description,
        period_type: { ...recurringTransferData.period_type.dataValues },
        status:{ ... recurringTransferData.status.dataValues },
        source_account: { ...recurringTransferData.source_account.dataValues },
        destination_account: { ...recurringTransferData.destination_account.dataValues }
      };
      return { code: 200, status: "success", description: "Recurring Transfer data retrieved", data: obj } as IResponse<void>;
    }
    return { code: 404, status: "error", description: "Recurring Transfer data not found" } as IResponse<void>;
    } catch (error: any) {
      throw new CustomError("GET_RECURRING_TRANSFER_FAILED", `Failed to get recurring transfer: ${error.message}`);
    }
  };      