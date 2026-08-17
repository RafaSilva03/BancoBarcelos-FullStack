import { Request, Response, NextFunction } from "express";
import { Transfer, IResponse } from "../../interface";
import { TransferService } from "../../services";
import { validateData } from "../../validator/data.validator";

export const createTransfer = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const TransferData: Transfer.ParsedTransfer = parseTransferData(req.body);
        await validateData(TransferData, getTransferSchema());
        const result = await TransferService.createTransfer(TransferData)
        res.status(result.code).json(result);
    } catch (error) {
        next(error);
    }
};

const parseTransferData = (data: any): Transfer.ParsedTransfer => {
    return {
        source_account_id: data.source_account_id,
        destination_account_id: data.destination_account_id,
        ammount: data.ammount,
        date: data.date,
        tax_fee: data.tax_fee,
        description: data.description,
    };
};

const getTransferSchema = (): any => {
    return {
        source_account_id: { type: "uuid", empty: false },
        destination_account_id: { type: "uuid", empty: false },
        ammount: { type: "number", empty: false},
        date: { type: "date", empty: false, convert: true },
        tax_fee: { type: "number", empty: false},
        description: { type: "string", empty: false, max: 200 },
      };
}