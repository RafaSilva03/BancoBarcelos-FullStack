import { GenerateCode } from "./../controllers/generate/generate.controller";
import express, { Router, Request, Response, NextFunction } from "express";
import { verifyJWT } from "../middleware/auth.middleware";
const router: Router = express.Router();

router.post("/", verifyJWT, GenerateCode.createCode);
router.put("/:code", verifyJWT, GenerateCode.useCode);

export default router;
