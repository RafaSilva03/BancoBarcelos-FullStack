import { IResponse, ITableName } from "../../interface/";
import { createTableName, existTableNameById, getTableNameId } from "./";

export class TableNameService {
  static async getTableNameId(name: string): Promise<IResponse<ITableName | void>> {
    return await getTableNameId(name);
  }

  static async existTableNameById(name: string): Promise<IResponse<ITableName>> {
    return await existTableNameById(name);
  }

  static async createTableName(tableNameId: string): Promise<boolean> {
    return await createTableName(tableNameId);
  }
}
