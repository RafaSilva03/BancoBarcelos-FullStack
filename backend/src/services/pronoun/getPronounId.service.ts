import { pronoun } from "../../models/pronoun";
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
