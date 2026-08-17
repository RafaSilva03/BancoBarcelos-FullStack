import express, { Router } from "express";
import { CreditPaymentController } from "../controllers/credit_payment/creditPayment.controller";
import { verifyJWT } from "../middleware/auth.middleware";

const router: Router = express.Router();

router.post("/", CreditPaymentController.createCreditPayment);
router.get("/", verifyJWT, CreditPaymentController.getAllCreditPayments);
router.get("/:id", verifyJWT, CreditPaymentController.getCreditPaymentById);
router.get("/fromLoanCredit/:id", verifyJWT, CreditPaymentController.getCreditPaymentsFromLoanCredit);
router.get("/totalPayments/:id", verifyJWT, CreditPaymentController.getTotalPaymentsForLoanCredit);
//router.delete("/:id", LoanCreditController.endLoanCredit);
//router.put("/:id", verifyJWT, LoanCreditController.updateLoanCredit);

export default router;
 