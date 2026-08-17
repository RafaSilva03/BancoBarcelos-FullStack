import { uuidv4 as v4 } from "uuid";

export interface ParsedUser {
  id?: uuidv4;
  name: string;
  pronoun_id: string;
  picture_name: string;
  dob: string;
  address: string;
  sex_type_id: string;
  postal_code: {
    code: string;
    location: string;
  };
  contacts: {
    contact_type: string;
    contact_value: string;
  }[];
  status_id: string;
  nif: string;
  password: string;
}

export interface PostalCode {
  id?: string;
  code: string;
  location: string;
}

interface Contact {
  id: string;
  user_id: string;
  contact_type_id: string;
  contact_value: string;
  type: string;
}

export interface ResponseUser {
  id: string;
  name: string;
  pronoun_id: string;
  picture_name: string;
  dob: string;
  address: string;
  postal_code: PostalCode;
  status_id: string;
  sex_type_id: string;
  nif: string;
  registration_date?: string;
  contacts: Contact[];
}

export interface DeleteUser {
  id: string;
  statusId: string;
}
