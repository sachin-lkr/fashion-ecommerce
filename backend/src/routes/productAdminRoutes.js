import express from "express";
import {router} from "express";
import authenticate from "../middleware/authenticate";
import { createMultipleProduct, createProduct, deleteProduct, updateProduct } from "../controller/productController.js";

router.post("/",authenticate,createProduct);
router.post("/creates",authenticate,createMultipleProduct);
router.delete("/:id",authenticate,deleteProduct);
router.put("/:id",authenticate,updateProduct);

export default router