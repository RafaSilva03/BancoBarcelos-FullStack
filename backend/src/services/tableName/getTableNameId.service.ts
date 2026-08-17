import { table_name } from "../../models/table_name";
import { ITableName, IResponse } from "../../interface/";
import { CustomError } from "../../errors/";

export const getTableNameId = async (name: string): Promise<IResponse<ITableName | void>> => {
  try {
    
    const result = await table_name.findOne({
      where: {
        name: name,
      },
    });
    return result ? ({ code: 200, status: "success", data: { id: result.id, name: name } } as IResponse<ITableName>) : ({ code: 400, status: "error" } as IResponse<void>);
  } catch (error: any) {
    throw new CustomError("GET_TABLE_NAME_FAILED", `Failed to get table name id: ${error.message}`);
  }
};
