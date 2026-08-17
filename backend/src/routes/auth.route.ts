import express, { Router } from "express";
import { AuthController } from "../controllers/auth/auth.controller";

const router: Router = express.Router();

router.post("/", AuthController.authentic);


export default router;
