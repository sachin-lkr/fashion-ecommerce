import express from "express";
import {cancelledOrderController, confirmedOrderController, deleteOrderController, deliverOrderController, getALLOrdersController, shipOrderController,} from "../controller/admidOrderController.js"
import authenticate from "../middleware/authenticate.js"

const router = express.Router();


router.get("/",authenticate,getALLOrdersController);
router.put("/:orderId/confirmed",authenticate,confirmedOrderController);
router.put("/:orderId/confirmed",authenticate,shipOrderController);
router.put("/:orderId/confirmed",authenticate,deliverOrderController);
router.put("/:orderId/confirmed",authenticate,cancelledOrderController);
router.put("/:orderId/confirmed",authenticate,deleteOrderController);

export default router;