import { uuidv4 as v4 } from "uuid";

export interface IInterface{
    details : string;
    exp_date?: string;
    registration_date: string;
    statusId: string;
    insuranceTypeId: string;
}
