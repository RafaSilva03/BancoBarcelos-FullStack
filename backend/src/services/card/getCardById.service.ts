import { ICard, IResponse  } from "../../interface/"
import {CustomError} from "../../errors/"

import { card } from "../../models/card";
import { card_type } from "../../models/card_type";

export const getCardById = async (id: string): Promise<IResponse<ICard | void>> => {   
    try {
      const existingCard = await card.findOne({ where: { id: id } });
      if (!existingCard) {
        return { code: 404, status: "error", details: "Card not found" } as IResponse<void>;
      }

      const CardData = await card.findOne({
        where: { id: id },
        include: [
          { model: card_type, as: "card_type", attributes: ["id", "name"] },
        ],
      });

      if (CardData) {
        let obj = {
          id: CardData.id,
          cvv: CardData.cvv,
          number: CardData.number,
          ammount_limit: CardData.amount_limit,
          exp_date: CardData.exp_date,
          cardType: { ...CardData.card_type.dataValues },
        };
        
        
        return { code: 200, status: "success", description: "Card data retrieved", data: obj } as IResponse<void>;
      }
      return { code: 404, status: "error", description: "Card data retrieved" } as IResponse<void>;
    } catch (error: any) {
      throw new CustomError("GET_CARD_FAILED", `Failed to get card: ${error.message}`);
    }
  };      