import { UUID } from "crypto"; 
import { uuidv4 as v4 } from "uuid";  

export interface ParsedCheck{
    check_number?: uuidv4;
    value : number;
    emission_date: string;
    account_number_id: string;
    check_type_id: string;
    
}

export interface ResponseCheck
{
    check_number: string;
    value : string;
    emission_date: string;
    account_number_id: string;
    check_type_id: string;
}

export interface DeleteCheck
{
    
    check_number: string;
    emission_date: string;
    
}


