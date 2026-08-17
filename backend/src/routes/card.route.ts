import express, { Router } from "express";
import { CardController } from "../controllers/card/card.controller";

const router: Router = express.Router();

router.post("/", CardController.createCard);
router.get("/:id", CardController. getCardById);
router.get("/", CardController. getCards);



export default router;