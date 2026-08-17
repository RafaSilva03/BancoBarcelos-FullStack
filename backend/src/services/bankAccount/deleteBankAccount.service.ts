import { CustomError } from "../../errors/";
import { BankAccount, IResponse } from "../../interface/";
import { bank_account } from "../../models/bank_account";

export const deleteBankAccount = async(user: any, Id: string): Promise<IResponse<BankAccount.ResponseBankAccount>> =>{
    try{
        const payloadData = buildPayloadData(user, Id);
        await updateBankAccount(payloadData);
        return {
            status: "success",
            code: 201,
            description: "Bank Account deleted successfully.",
            data: payloadData,
          };
    }
    catch (error: any) {
        throw new CustomError("DELETE_BANK_ACCOUNT_FAILED", `Failed to delete bank account: ${error.message}`);
    }
};

  const updateBankAccount = async (payloadData: any) => {
    
    const result = await bank_account.update(
      {
        status_id: payloadData.status_id,
        closed_date: payloadData.closed_date,
      },
      {
        where: {
          account_number: payloadData.account_number
        }
      }
    );
  }

  const buildPayloadData = (user: BankAccount.DeleteBankAccount,Id: string): any => {
    return {
      account_number: Id,
      closed_date: user.closed_date,
      status_id: user.statusId,
    };
  };