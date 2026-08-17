import express, { Router } from "express";
import { TransferController } from "../controllers/transfer/transfer.controller";

const router: Router = express.Router();

router.post("/", TransferController.createTransfer);
router.get("/",TransferController.getAllTransfers);
router.get("/:id",TransferController.getTransferById);

export default router;