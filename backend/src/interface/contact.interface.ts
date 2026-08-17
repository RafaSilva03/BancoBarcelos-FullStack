import { uuidv4 as v4 } from "uuid";

export interface IContact {
  id: uuidv4;
  user_id: uuidv4;
  contact_type: uuidv4;
  contact_value: string;
}

export interface IContactType {
  id: uuidv4;
  type: string;
}


