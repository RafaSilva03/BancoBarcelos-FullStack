import { RecurringTransfer, IResponse} from "../../interface/";   
import { createRecurringTransfer, getRecurringTransferById, existRecurringTransfer, searchRecurringTransfer, getAllRecurringTransfers} from "./";


export class RecurringTransferService{
    
    static async createRecurringTransfer(data: RecurringTransfer.ParsedRecurringTransfer): Promise<IResponse<RecurringTransfer.ResponseRecurringTransfer>>{
        return await createRecurringTransfer(data);
    }

    static async existRecurringTransfer(id: string): Promise<boolean>{
        return await existRecurringTransfer(id);
    }

    static async getRecurringTransfer(id: string): Promise<IResponse<RecurringTransfer.ResponseRecurringTransfer>>{
        return await getRecurringTransferById(id);
    }

    static async searchRecurringTransfer(): Promise<IResponse<RecurringTransfer.ResponseRecurringTransfer | void>>{
        return await searchRecurringTransfer();

    }
    
    static async getAllRecurringTransfers(): Promise<IResponse<any>>{
        return await getAllRecurringTransfers();

    }
}