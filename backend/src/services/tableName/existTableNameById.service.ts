import { table_name } from "../../models/table_name";
import { CustomError } from "../../errors/";

export const existTableNameById = async (tableNameId: string): Promise<boolean> => {
  try {
    const result = await table_name.findOne({
      where: {
        id: tableNameId,
      },
    });

    return !!result;
  } catch (error: any) {
    throw new CustomError("EXIST_TABLE_NAME_BY_ID", `Failed to see if table name id exists: ${error.message}`);
  }
};
