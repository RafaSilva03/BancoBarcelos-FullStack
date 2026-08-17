import { Transfer, IResponse  } from "../../interface/"
import {CustomError} from "../../errors/"

import { transfer } from "../../models/transfer";
import { bank_account } from "../../models/bank_account";



export const getAllTransfers = async (): Promise<IResponse<any>> => {   
    try {

    const AllTransfersData = await transfer.findAll({
      include: [
        { model: bank_account, as: "source_account", attributes: ["account_number", "iban", "current_balance", "available_balance", "opened_date", "closed_date"] },
        { model: bank_account, as: "destination_account", attributes: ["account_number", "iban", "current_balance", "available_balance", "opened_date", "closed_date"] },
      ],
    });
    if (AllTransfersData.length > 0) {
        const transfers = AllTransfersData.map((TransferData) => ({
            id: TransferData.id,
            ammount: TransferData.ammount,
            tax_fee: TransferData.tax_fee,
            date: TransferData.date,
            description: TransferData.description,
            source_account: { ...TransferData.source_account.dataValues },
            destination_account: { ...TransferData.destination_account.dataValues }
        }));
      return { code: 200, status: "success", description: "Transfer data retrieved", data: transfers } as IResponse<void>;
    }
    } catch (error: any) {
      throw new CustomError("GET_ALL_TRANSFER_FAILED", `Failed to get transfer: ${error.message}`);
    }
  };      