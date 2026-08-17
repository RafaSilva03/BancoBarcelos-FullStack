import { UserController } from "./../controllers/user/user.controller";
import express, { Router, Request, Response, NextFunction } from "express";
import { upload } from "../controllers/upload/upload.controller";
import { verifyJWT } from "../middleware/auth.middleware";
const router: Router = express.Router();

router.post("/", upload.single("image"), UserController.createUser);
router.delete("/:id", verifyJWT, UserController.deleteUser);
router.get("/data", verifyJWT, UserController.getUserById);
router.get("/", verifyJWT, UserController.getAllUsers);
router.put("/data",  verifyJWT, UserController.updateUser);

export default router;
