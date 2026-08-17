import { card_type } from "../../models/card_type";
import { CustomError } from "../../errors/";

export const existCardTypeById = async (cardTypeId: string): Promise<boolean> => {
  try {
    const result = await card_type.findOne({
      where: {
        id: cardTypeId,
      },
    });

    return !!result;
  } catch (error: any) {
    throw new CustomError("EXIST_CARD_TYPE_BY_ID", `Failed to see if card_type id exists: ${error.message}`);
  }
};
