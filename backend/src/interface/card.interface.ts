import { uuidv4 as v4 } from "uuid";

export interface ICard {
  id: uuidv4;
  number: number;
  exp_date: string;
  cvv: string;
  ammount_limit: number;
  card_type_id: string;
}
