import { generated_code } from "../../models/generated_code";
import { IResponse } from "../../interface/";
import { CustomError } from "../../errors/";

export const getCodeDataByCode = async (code: string): Promise<IResponse<any>> => {
  try {
    const result = await generated_code.findOne({
      where: {
        code: code,
      },
    });

    return result ? { code: 200, status: "success", data: { ...result.dataValues } } : { code: 400, status: "error" };
  } catch (error: any) {
    throw new CustomError("GET_PRONOUN_FAILED", `Failed to get pronoun id: ${error.message}`);
  }
};
