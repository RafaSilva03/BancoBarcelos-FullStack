import { v4 as uuidv4 } from "uuid";
import { CustomError } from "../../errors/";
import { CardTypeService, BankAccountService} from "../";
import { ICard, IResponse } from "../../interface/";
import { card } from "../../models/card";

export const createCard = async (card: any): Promise<IResponse<ICard>> => {
  

  if ((await CardTypeService.existCardTypeById(card.card_type_id)) === false) {
    return {
      status: "error",
      code: 404,
      description: "Invalid card_type id",
    };
  }


  if ((await BankAccountService.existBalance(card)) === false) {
    return {
      status: "error",
      code: 404,
      description: "Not enough balance to create a card",
    };
  }

  try {
      
    const id = uuidv4();

    const payloadData = buildPayloadData(CardTypeService, id);
    await insertCard(payloadData);

    return {
      status: "success",
      code: 201,
      description: "Card created successfully.",
      data: payloadData,
    };
  }catch (error: any) { 
  throw new CustomError("CREATE_CARD_FAILED", `Failed to create card: ${error.message}`);
 }
};

const insertCard = async (payloadData: any) => {
  let cardObj = { ...payloadData};

  const payload = await card.create(cardObj);
};

const buildPayloadData = (card: ICard, id: string): any => {
  return {
    id: card.account_number,
    card_id: id,
    cvv: card.iban,
    number: card.current_balance,
    ammount: card.ammount_limit,
    exp_date: new Date().toISOString(),
    card_type__id: card.card_type_id,
  };
}; 

