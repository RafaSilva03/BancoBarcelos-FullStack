import { uuidv4 as v4 } from "uuid";

export interface IPostalCode {
  id: uuidv4;
  code: string;
  location: string;
}
