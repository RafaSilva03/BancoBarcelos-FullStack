import { ICard, IResponse  } from "../../interface/"
import {CustomError} from "../../errors/"

import { card } from "../../models/card";
import { card_type } from "../../models/card_type";

export const getAllCards = async (id: string): Promise<IResponse<any>> => {   
    try {

      const allCardsData = await card.findAll({
        where: { id: id },
        include: [
          { model: card_type, as: "card_type", attributes: ["id", "name"] },
        ],
      });
      if (allCardsData.length > 0) { 
        const users = allCardsData.map((CardData) => ({
          id: CardData.id,
          cvv: CardData.cvv,
          number: CardData.number,
          ammount_limit: CardData.amount_limit,
          exp_date: CardData.exp_date,
          CardType: { ...CardData.card_type.dataValues },
        }));
        return { code: 200, status: "success", description: "Cards data retrieved", data: users } as IResponse<void>;
      }
      return { code: 404, status: "error", description: "Cards data retrieved" } as IResponse<void>;
    }
     catch (error: any) { 
      throw new CustomError("GET_Bank_Account_FAILED", `Failed to get card  : ${error.message}`);
    }
  };      



  