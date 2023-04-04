import express from "express";
import { body } from "express-validator";
import {signIn,signOut,signUp,following} from "../controller/userController.js";

const router=express.Router();

router.post("/signIn",signIn);
router.post("/signUp",signUp);

router.get("/signOut",signOut);
router.get("/signIn/help",userHelp);
router.get("/follower/:userId/:friendId",following);

router.get("/unFollow",unfollow);
router.get("/spam",spam);

export default router;