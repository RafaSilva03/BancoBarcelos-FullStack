import { uuidv4 as v4 } from "uuid";

export interface IWithdrawalDeposit {
  id: uuidv4;
  ammount: number;
  atm_code: string;
  sign: string;
  description: string;
  date: string;
}
