import express from "express";
const router = express.Router();
import userController from "../controller/userController.js";


router.get("/profile",userController.getUserProfile);
router.get("/",userController.getAllUsers);

export default router