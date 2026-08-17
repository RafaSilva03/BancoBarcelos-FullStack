import { db } from "../../config/database";
import { IPostalCode, IResponse } from "../../interface/";
import { CustomError } from "../../errors/";

export const getContactId = async (code: string): Promise<IResponse<IPostalCode | void>> => {
  try {
    const result = await db.oneOrNone(`SELECT id FROM dev.postal_code WHERE code = $1`, code);

    return result ? ({ code: 200, status: "success", data: { id: result.id, code: code } } as IResponse<IPostalCode>) : ({ code: 400, status: "error" } as IResponse<void>);
  } catch (error: any) {
    throw new CustomError("CREATE_POSTAL_CODE_FAILED", `Failed to get postal_code id: ${error.message}`);
  }
};
