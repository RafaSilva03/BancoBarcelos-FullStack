import express, { Router } from "express";
import { LoanCreditController } from "../controllers/loanCredit/loanCredit.controller";
import { verifyJWT } from "../middleware/auth.middleware";

const router: Router = express.Router();

router.post("/", LoanCreditController.createLoanCredit);
//router.delete("/:id", LoanCreditController.endLoanCredit);
router.get("/:id", verifyJWT, LoanCreditController.getLoanCreditById);
router.get("/", verifyJWT, LoanCreditController.getAllLoanCredits);
//router.put("/:id", verifyJWT, LoanCreditController.updateLoanCredit);

export default router;
 