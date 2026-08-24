import express from "express";
import {router} from "express";

import { removeCartItem, updateCartItem } from "../controller/cartItemController.js"
import authenticate from "../middleware/authenticate";

router.put("/:id",authenticate,updateCartItem);
router.delete("/:id",authenticate,removeCartItem);
export default router;