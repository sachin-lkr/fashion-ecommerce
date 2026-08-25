import express from "express"
const router = express.Router();
import authenticate from "../middleware/authenticate.js"
import { findProductByIdController, getAllProductsController } from "../controller/productController.js"

router.get("/",authenticate,getAllProductsController);
router.get("/:id/:id",authenticate,findProductByIdController);


export default router;