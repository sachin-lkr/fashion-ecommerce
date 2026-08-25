import express from "express"
const router = express.Router();
import { addItemToCartController, findUserCartController } from "../controller/cartController.js"
import authenticate from "../middleware/authenticate.js"

router.get("/",authenticate,findUserCartController);
router.put("/add",authenticate,addItemToCartController)

export default router