import { balance_history } from "../../models/balance_history";
import { IBalanceHistory, IResponse } from "../../interface/";
import { CustomError } from "../../errors/";
import { v4 as uuidv4 } from "uuid";

export const createBalanceHistory = async (data: any, id: string): Promise<IResponse<IBalanceHistory>> => {
  try {
    const payload = await balance_history.create({
      id: id,
      balance_before: data.balance_before,
      balance_after: data.balance_after,
    });

    return { code: 200, status: "success", data: payload } as IResponse<IBalanceHistory>;
  } catch (error: any) {
    throw new CustomError("CREATE_BALANCE_HISTORY_FAILED", `Failed to create balance history: ${error.message}`);
  }
};
