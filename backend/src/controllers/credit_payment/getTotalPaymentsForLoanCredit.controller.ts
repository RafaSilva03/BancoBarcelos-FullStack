import { CreditPaymentService } from "../../services/";
import { Request, Response, NextFunction } from "express";
import { validateData } from "../../validator/data.validator";

export const getTotalPaymentsForLoanCredit = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await validateData({ id: req.params.id }, { id: { type: "uuid" } });

    // Chama o serviço para obter o total de pagamentos para o empréstimo/credito especificado
    const totalPayments = await CreditPaymentService.getTotalPaymentsForLoanCredit(req.params.id);

    // Retorna o resultado
    res.status(200).json({ totalPayments });
  } catch (error) {
    next(error);
  }
};
