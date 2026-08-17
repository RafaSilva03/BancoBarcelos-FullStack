import { balance_history } from "../../models/balance_history";
import { IBalanceHistory, IResponse } from "../../interface/";
import { CustomError } from "../../errors/";

export const getAllBalanceHistories = async (movements: any): Promise<IResponse<IBalanceHistory[]>> => {
  try {
    const balanceHistoryIds: string[] = movements.map((movement: any) => movement.balance_history_id);
    const uniqueBalanceHistoryIds: string[] = Array.from(new Set(balanceHistoryIds));

    const balanceHistories = await balance_history.findAll({
      where: {
        id: uniqueBalanceHistoryIds,
      },
    });

    if (balanceHistories.length === 0) {
      return {
        code: 404,
        status: "error",
        description: "No balance histories found for the extracted IDs"
      } as IResponse<void>;
    }

    const data = balanceHistories.map(record => ({
      id: record.id,
      balance_before: record.balance_before,
      balance_after: record.balance_after
    }));

    return {
      code: 200,
      status: "success",
      description: "Balance histories retrieved successfully",
      data: data
    } as IResponse<IBalanceHistory[]>;
  } catch (error: any) {
    throw new CustomError("GET_ALL_BALANCE_HISTORIES_FAILED", `Failed to get all balance histories: ${error.message}`);
  }
};
