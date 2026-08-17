import { table_name } from "../../models/table_name";
import { ITableName, IResponse } from "../../interface/";
import { CustomError } from "../../errors/";
import { v4 as uuidv4 } from "uuid";

export const createTableName = async (name: string): Promise<IResponse<ITableName>> => {
  try {
    const id = uuidv4();

    const newTableName = await table_name.create({
      id: id,
      name: name,
    });

    return { code: 200, status: "success", data: newTableName.toJSON() } as IResponse<ITableName>;
  } catch (error: any) {
    throw new CustomError("CREATE_TABLE_NAME_FAILED", `Failed to create table name: ${error.message}`);
  }
};
