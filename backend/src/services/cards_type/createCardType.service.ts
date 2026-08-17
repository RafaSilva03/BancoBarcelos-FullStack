import { card_type } from "../../models/card_type";
import { ICardType, IResponse } from "../../interface/";
import { CustomError } from "../../errors/";
import { v4 as uuidv4 } from "uuid";

export const createCardType = async (type: string): Promise<IResponse<ICardType>> => {
  try {
    const id = uuidv4();

    const newCardype = await card_type.create({
      id: id,
      name: type,
    });

    return { code: 200, status: "success", data: newCardype.toJSON() } as IResponse<ICardType>;
  } catch (error: any) {
    throw new CustomError("CREATE_CARD_TYPE_FAILED", `Failed to create card type: ${error.message}`);
  }
};
