import {ICard, IResponse} from "../../interface/";   
import { createCard,getAllCards,getCardById} from "./";



export class CardService{
    static async createCard(data: any): Promise<IResponse<ICard>>{
        return await createCard(data);
    }

    static async getCardById(id: string): Promise<IResponse<ICard>>{
        return await getCardById(id);
    }
    
    static async getAllCards(id: string): Promise<IResponse<any>>{
        return await getAllCards(id);
    }
}
