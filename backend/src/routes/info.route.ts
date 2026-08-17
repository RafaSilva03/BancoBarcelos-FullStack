import express, { Router } from 'express';
import * as controller from '../controllers/info';


const router: Router = express.Router();

router.get("/version", controller.GetApiVersion.handle);
router.get("/alive", controller.IsApiAlive.handle);



export default router;

