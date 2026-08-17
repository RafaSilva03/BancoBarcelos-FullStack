import { pronoun } from "../../models/pronoun";
import { CustomError } from "../../errors/";

export const existPronounById = async (pronounId: string): Promise<boolean> => {
  try {
    const result = await pronoun.findOne({
      where: {
        id: pronounId,
      },
    });

    return !!result;
  } catch (error: any) {
    throw new CustomError("GET_PRONOUN_BY_ID", `Failed to get pronoun id: ${error.message}`);
  }
};
