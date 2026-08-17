import { Request, Response, NextFunction } from "express";
import { RecurringTransfer, IResponse } from "../../interface";
import { RecurringTransferService } from "../../services";
import { validateData } from "../../validator/data.validator";

export const createRecurringTransfer = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const recurringTransferData: RecurringTransfer.ParsedRecurringTransfer = parseRecurringTransferData(req.body);
   //     await validateData(recurringTransferData, getRecurringTransferSchema());
        const result = await RecurringTransferService.createRecurringTransfer(recurringTransferData)
        res.status(result.code).json(result);
    } catch (error) {
        next(error);
    }
};

const parseRecurringTransferData = (data: any): RecurringTransfer.ParsedRecurringTransfer => {
    return {
        source_account_id: data.source_account_id,
        destination_account_id: data.destination_account_id,
        ammount: data.ammount,
        periodTypeId: data.period_type_id,
        statusId: data.status_id,
        start_date: data.start_date,
        end_date: data.end_date,
        tax_fee: data.tax_fee,
        description: data.description,
    };
};

const getRecurringTransferSchema = (): any => {
    return {
        source_account_id: { type: "uuid", empty: false },
        destination_account_id: { type: "uuid", empty: false },
        ammount: { type: "number", empty: false},
        period_type_id: { type: "uuid", empty: false },
        status_id: { type: "uuid", empty: false },
        start_date: { type: "date", empty: false, convert: true },
        end_date: { type: "date", empty: false, convert: true },
        tax_fee: { type: "number", empty: false},
        description: { type: "string", empty: false, max: 200 },
      };
}