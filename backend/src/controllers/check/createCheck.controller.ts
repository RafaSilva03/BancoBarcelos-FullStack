import { Request, Response, NextFunction } from "express";
import { ICheck, IResponse } from "../../interface";
import { CheckService } from "../../services/check/checks.service";
import { validateData } from "../../validator/data.validator";

export const createCheck = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const checkData: ICheck.ParsedCheck = parseCheckData(req.body);
        await validateData(checkData, getCheckSchema());
        const result = await CheckService.createCheck(checkData);
        res.status(result.code).json(result);
    } catch (error) {
        next(error);
    }
};

const parseCheckData = (data: ICheck.ParsedCheck): ICheck.ParsedCheck => {  //campos que pedes ao utilizador
    return {
        check_number: data.check_number ,
        value : data.value,
        account_number_id: data.account_number_id,
        check_type_id: data.check_type_id,

    };
};

const getCheckSchema = (): any => {     
    return {
        check_number: { type: "string", empty: false, max: 26 },
        value: { type: "number", empty: false },
        account_number_id: { type: "uuid", empty: false },
        check_type_id: { type: "uuid", empty: false},
        
    
    };
};