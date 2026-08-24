import express from "express";
import { router } from "express";
import authenticate from "../middleware/authenticate";

import { createRating, getAllRating } from "../controller/ratingController.js";


router.post("/create",authenticate,createRating);
router.put("/product/:productId",authenticate,getAllRating);

export default router;