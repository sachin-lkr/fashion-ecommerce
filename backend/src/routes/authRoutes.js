import express from "express";
const router = express.Router();
import {loginController ,registerController} from "../controller/authController.js"

router.post("/signup",registerController);
router.post("/signin",loginController);

export default router;
