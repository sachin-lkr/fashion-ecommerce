import express from "express";
const router = express.Router();
import authenticate from "../middleware/authenticate.js";
import { createMultipleProductController, createProductController, deleteProductController, updateProductController } from "../controller/productController.js";

router.post("/",authenticate,createProductController);
router.post("/creates",authenticate,createMultipleProductController);
router.delete("/:id",authenticate,deleteProductController);
router.put("/:id",authenticate,updateProductController);

export default router