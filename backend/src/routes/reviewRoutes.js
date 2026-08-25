import express from "express"
const router = express.Router();
import { createReviewController, getAllReviewController } from "../controller/reviewController.js";
import authenticate from "../middleware/authenticate.js";

router.post("/create",authenticate,createReviewController);
router.get("/product/:productId",authenticate,getAllReviewController)
export default router;