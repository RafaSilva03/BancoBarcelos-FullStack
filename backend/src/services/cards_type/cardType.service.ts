import { IResponse, ICardType } from "../../interface/";
import { createCardType,getCardTypeById,existCardTypeById } from "./";

export class CardTypeService 
{
  static async getCardTypeById(name: string): Promise<IResponse<any>> {
    return await getCardTypeById(name);
  }

  static async createCardType(name: string): Promise<IResponse<ICardType>> {
    return await createCardType(name);
  }

  static async existCardTypeById(cardTypeId: string): Promise<boolean> {
    return await existCardTypeById(cardTypeId);
  }
}
