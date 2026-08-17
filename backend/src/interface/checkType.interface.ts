import { UUID } from "crypto"; 
import { uuidv4 as v4 } from "uuid";  

export interface ICheckType {
    id: uuidv4;
    type: string;
  }