import { uuidv4 as v4 } from "uuid";

export interface IBalanceHistory {
  id: uuidv4;
  balance_before: number;
  balance_after: number;
}