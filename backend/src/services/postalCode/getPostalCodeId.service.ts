import { postal_code } from "../../models/postal_code";
import { IPostalCode, IResponse } from "../../interface/";
import { CustomError } from "../../errors/";

export const getPostalCodeId = async (code: string): Promise<IResponse<IPostalCode | void>> => {
  try {
    const result = await postal_code.findOne({
      where: {
        code: code,
      },
    });

    return result ? ({ code: 200, status: "success", data: { id: result.id, code: result.code, location: result.location } } as IResponse<IPostalCode>) : ({ code: 400, status: "error" } as IResponse<void>);
  } catch (error: any) {
    throw new CustomError("GET_POSTAL_CODE_FAILED", `Failed to get postal_code id: ${error.message}`);
  }
};

/*

import { pronoun } from "../../models/pronoun";
import { sequelize } from "../../config/database";
import { IPronoun, IResponse } from "../../interface/";
import { CustomError } from "../../errors/";

export const getPronounId = async (pronounName: string): Promise<IResponse<IPronoun | void>> => {
  try {
    const result = await pronoun.findOne({
      where: {
        name: pronounName,
      },
    });

    return result ? { code: 200, status: "success", data: { id: result.id, pronoun: pronounName } } : { code: 400, status: "error" };
  } catch (error: any) {
    throw new CustomError("GET_PRONOUN_FAILED", `Failed to get pronoun id: ${error.message}`);
  }
};
*/
