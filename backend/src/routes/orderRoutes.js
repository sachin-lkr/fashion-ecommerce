import express from "express"
const router = express.Router();
import { createOrderController, findOrderByIdController, orderHistoryController } from "../controller/orderController.js"
import authenticate from "../middleware/authenticate.js"

router.post("/",authenticate,createOrderController);
router.get("/user",authenticate,orderHistoryController);
router.get("/:id",authenticate,findOrderByIdController);

export default router;