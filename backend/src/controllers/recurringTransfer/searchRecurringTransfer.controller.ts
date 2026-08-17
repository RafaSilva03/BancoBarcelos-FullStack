import { ResponseTransfer } from "./../../interface/transfer.interface";
import { transfer } from "./../../models/transfer";
import { RecurringTransferService, TransferService } from "../../services";
import { CustomError } from "../../errors";
import cron from "node-cron";

export const searchRecurringTransfer = async () => {
  try {
    await cron.schedule("*/10 * * * * *", async () => {
      const result = await RecurringTransferService.searchRecurringTransfer();

      if (result.status === "success") {
        const data = result.data.data;
        await Promise.all(
          data.map(async (rTransfer: any) => {
            let transfer: any = { date: new Date().toISOString(), ...rTransfer };
            const transfer_id = transfer.id;
            delete transfer.id;
            await TransferService.createTransfer(transfer);

            const transaction = {
              transfer_id: transfer_id,
              source_account_id: rTransfer.source_account_id,
              destination_account_id: rTransfer.destination_account_id,
              amount: rTransfer.ammount,
            };

            await TransferService.transferTransaction(transaction);
          })
        );
      }
    });
  } catch (error: any) {
    throw new CustomError("SEARCH_RECURRING_TRANSFER_FAILED", `Failed to search recurring transfer: ${error.message}`);
  }
};
