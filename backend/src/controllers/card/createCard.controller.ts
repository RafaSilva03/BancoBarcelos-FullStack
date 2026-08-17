import { Request, Response, NextFunction } from "express";
import { ICard, IResponse } from "../../interface";
import { CardService } from "../../services";
import { validateData } from "../../validator/data.validator";

export const createCard = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const bankAccountData: ICard = parseCardData(req.body, req.params.id);
        await validateData(bankAccountData, getCardSchema());
        const result = await CardService.createCard(bankAccountData);
        res.status(result.code).json(result);
    } catch (error) {
        next(error);
    }
};

const parseCardData = (data: any, id: string): ICard => {
    return {
        account_number: id,
        cvv: data.cvv,
        number: data.number,
        ammount_limit: data.ammount_limit,
        card_type_id: data.card_type_id,
        exp_date: new Date(data.exp_date).toISOString(),
    };
};

const getCardSchema = (): any => {
    return {
        account_number: { type: "uuid", empty: false},
        cvv: { type: "string", empty: false, max: 3 },
        number: { type: "number", empty: false },
        ammount_limit: { type: "number", empty: false },
        card_type_id: { type: "uuid", empty: false},
        exp_date: { type: "date", empty: false, convert: true },
    };
};