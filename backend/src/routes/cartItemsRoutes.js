import express from "express";
const router = express.Router();

import { removeCartItemController, updateCartItemController } from "../controller/cartItemController.js"
import authenticate from "../middleware/authenticate.js";

router.put("/:id",authenticate,updateCartItemController);
router.delete("/:id",authenticate,removeCartItemController);
export default router;