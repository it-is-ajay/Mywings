import express from "express";
import { body } from "express-validator";
import {signIn,signOut,signUp,follow,unfollow,help} from "../userController/userController.js";
const router=express.Router();
router.get("/signIn",signIn);
router.get("/signUp",signUp);
router.get("/signOut",signOut);
router.get("/signIn/help",help);
router.get("/follow/:userId/:friendId",follow);
router.get("/unFollow",unfollow);
// router.get("/spam",spam);

export default router;