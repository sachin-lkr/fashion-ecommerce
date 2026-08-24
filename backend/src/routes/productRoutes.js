import express from "express"
import {router} from "express"
import authenticate from "../middleware/authenticate"
import { findProductById, getAllProducts } from "../controller/productController.js"

router.get("/",authenticate,getAllProducts);
router.get("/:id/:id",authenticate,findProductById);


export default router;