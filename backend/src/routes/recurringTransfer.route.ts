import express, { Router } from "express";
import { RecurringTransferController } from "../controllers/recurringTransfer/recurringTransfer.controller";

const router: Router = express.Router();

router.post("/", RecurringTransferController.createRecurringTransfer);
router.get("/",RecurringTransferController.getAllRecurringTransfers);
router.get("/:id",RecurringTransferController.getRecurringTransfer);




export default router;