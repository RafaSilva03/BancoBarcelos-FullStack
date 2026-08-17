import express, { Router } from "express";
import { CheckController } from "../controllers/check/check.controller";
import { verifyJWT } from "../middleware/auth.middleware";//verificar o token 

const router: Router = express.Router();

router.post("/", CheckController.createCheck);//criar check
router.get("/:checkNumber", verifyJWT, CheckController.getCheckByNumber); //verifica  o token e em seguida obtem os checks de um number
router.get("/", verifyJWT, CheckController.getAllChecks);
export default router;