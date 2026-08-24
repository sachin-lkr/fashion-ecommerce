import express from "express";
import {cancelledOrder, confirmedOrder, deleteOrder, deliverOrder, getALLOrders, shipOrder,} from "../controller/admidOrderController.js"
import authenticate from "../middleware/authenticate.js"

const router = express.Router();


router.get("/",authenticate,getALLOrders);
router.put("/:orderId/confirmed",authenticate,confirmedOrder);
router.put("/:orderId/confirmed",authenticate,shipOrder);
router.put("/:orderId/confirmed",authenticate,deliverOrder);
router.put("/:orderId/confirmed",authenticate,cancelledOrder);
router.put("/:orderId/confirmed",authenticate,deleteOrder);

export default router;