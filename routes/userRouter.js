import express from "express";
import { body } from "express-validator";
import {signIn,signOut,signUp,following,userHelp,unfollowing,collaborationDetails,userSpam,uploadProfile,searchById,searchByArt,serverProfileByKeyword} from "../controller/userController.js";

const router=express.Router();

router.post("/signIn",signIn);
router.post("/signUp",signUp);

router.get("/signOut",signOut);
router.get("/signIn/help",userHelp);
router.get("/follower/:userId/:friendId",following);

router.get("/unFollow",unfollowing);
router.get("/spam",userSpam);


//.....................

router.get("/searchProfile/:keyword",serverProfileByKeyword);
router.get("/searchByArt/:art",searchByArt);
router.get("/searchById/:userId",searchById);
router.get("/searchProfile/viewProfile/:userId",searchById);
router.post("/uploadProfile",uploadProfile);
router.post("/collaborationDetails",collaborationDetails)

export default router;