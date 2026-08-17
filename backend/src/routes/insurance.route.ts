import { InsuranceController } from "./../controllers/insurance/insurance.controller";
import express, { Router, Request, Response, NextFunction } from "express";
import { upload } from "../controllers/upload/upload.controller";
import { verifyJWT } from "../middleware/auth.middleware";
const router: Router = express.Router();

router.post("/", verifyJWT, InsuranceController.createInsurance);
router.delete("/:id", verifyJWT, InsuranceController.deleteInsurance);
router.get("/:id", verifyJWT, InsuranceController.getInsuranceById);
router.get("/", verifyJWT, InsuranceController.getAllInsurances);
router.put("/:id",  verifyJWT, InsuranceController.updateInsurance);

export default router;
