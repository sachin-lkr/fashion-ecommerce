import express from "express"
import {router} from "express"
import { createOrder, findOrderById, orderHistory } from "../controller/orderController.js"
import authenticate from "../middleware/authenticate.js"

router.post("/",authenticate,createOrder);
router.get("/user",authenticate,orderHistory);
router.get("/:id",authenticate,findOrderById);

export default router;