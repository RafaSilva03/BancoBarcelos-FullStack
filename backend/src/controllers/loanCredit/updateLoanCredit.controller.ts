/*import { Request, Response, NextFunction } from "express";
import { LoanCreditService } from "../../services/";
import { validateData } from "../../validator/data.validator";

export const updateLoanCredit = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await validateData({ id: req.params.id }, { id: { type: "uuid" } });
    const result = await LoanCreditService.getLoanCreditById(req.params.id);
    res.status(result.code).json(result);
  } catch (error) {
    next(error);
  }
};

// ????? Duvida
const updateSchema = (): any => {
  return {
    pronoun_id: { type: "uuid", empty: false },
    sex_type_id: { type: "uuid", empty: false, convert: true },
    address: { type: "string", empty: false, max: 255 },
   
    postal_code: {
      type: "object",
      props: {
        code: { type: "string", empty: false, pattern: /^\d{4}-\d{3}$/ },
        location: { type: "string", empty: false },
      },
    },
   
  };
};*/
