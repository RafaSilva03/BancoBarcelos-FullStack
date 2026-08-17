import { ICheck, IResponse} from "../../interface/";    
import { createCheck, existCheckByNumber, getCheckByNumber,getAllChecks} from "./"; 


export class CheckService{
    static async createCheck(data: ICheck): Promise<IResponse<ICheck>>{
        return await createCheck(data);
    }

    static async existCheckByNumber(check_number: string): Promise<boolean>{
        return await existCheckByNumber(check_number);
    }

    static async getCheckByNumber(number: string): Promise<IResponse<ICheck.ResponseCheck>>{
        return await getCheckByNumber(number);
    }

    static async getAllChecks(): Promise<IResponse<any>>{
        return await getAllChecks();
    }
   

}



