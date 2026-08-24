import express from "express"
import {router} from "express";
import { createReview, getAllReview } from "../controller/reviewController.js";
import authenticate from "../middleware/authenticate.js";

router.post("/create",authenticate,createReview);
router.get("/product/:productId",authenticate,getAllReview)
export default router;