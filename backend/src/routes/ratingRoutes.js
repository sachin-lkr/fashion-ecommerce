import express from "express";
const router = express.Router();
import authenticate from "../middleware/authenticate.js";

import { createRatingController, getAllRatingController } from "../controller/ratingController.js";


router.post("/create",authenticate,createRatingController);
router.put("/product/:productId",authenticate,getAllRatingController);

export default router;