import express, { Router } from "express";
import { BankAccountController } from "../controllers/bankAccount/bankAccount.controller";

const router: Router = express.Router();

router.post("/", BankAccountController.createBankAccount);
router.delete("/:id", BankAccountController.deleteBankAccount);
router.get("/",BankAccountController.getAllBankAccounts);
router.get("/:id", BankAccountController.getBankAccountById);
router.put("/deposit/:id", BankAccountController.depositBankAccount);
router.put("/withdraw/:id", BankAccountController.withdrawalBankAccount);
router.put("/:id", BankAccountController.getBalanceHistory);



export default router;
