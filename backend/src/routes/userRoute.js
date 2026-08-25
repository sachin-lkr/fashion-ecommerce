import express from "express";
const router = express.Router();
import {getAllUsersController,getUserProfileController} from "../controller/userController.js";


router.get("/profile",getUserProfileController);
router.get("/",getAllUsersController);

export default router