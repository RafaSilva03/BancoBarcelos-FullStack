import { uuidv4 as v4 } from "uuid";

export interface IBankAccountMovements {
  id: uuidv4;
  account_number: string;
  table_name_id: string;
  balance_history_id: string;
  movement_id: string;
  date: string;
}