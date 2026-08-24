import express from "express"
import { router } from "express"
import { addItemToCart, findUserCart } from "../controller/cartController.js"
import authenticate from "../middleware/authenticate.js"

router.get("/",authenticate,findUserCart);
router.put("/add",authenticate,addItemToCart)

export default router