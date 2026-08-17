import { card_type } from "../../models/card_type";
import { ICardType, IResponse } from "../../interface/";
import { CustomError } from "../../errors/";

export const getCardTypeById = async (cardType: string): Promise<IResponse<any>> => {
  try {
    const result = await card_type.findOne({
      where: {
        name: cardType,
      },
    });

    return result ? ({ code: 200, status: "success", data: { id: result.id, name: cardType } } as IResponse<ICardType>) : ({ code: 400, status: "error" } as IResponse<void>);
  } catch (error: any) {
    throw new CustomError("GET_CARD _TYPE_FAILED", `Failed to get card type id: ${error.message}`);
  }
};
