import express from "express";
import { body } from "express-validator";
import {signIn,signOut,editProfile,deleteAccount,settingPage,signUp,removeFollower,userfollower,userfollowing,getAllFollowing,getAllFollower,userHelp,unfollowing,collaborationDetails,userSpam,uploadProfile,searchById,searchByArt,searchProfileByKeyword, SaveUser, banUser, getAllBanUser, unbanUser} from "../controller/user.controller.js";

const router=express.Router();

router.post("/signIn",
body("email","email is required..").isEmail(),
body("password","it is not a strong password ..").isStrongPassword()
,signIn);

router.post("/signUp",
body("name","name is required").isAlpha(),
body("username","username is required"),
body("email","email is required..").isEmail(),
body("password","it is not a strong password ..").isStrongPassword(),
signUp);

router.get("/signOut",signOut);
router.get("/signIn/help",userHelp);

router.get("/follower/:userId/:friendId",userfollower);
router.get("/following/:userId/:friendId",userfollowing);

router.get("/getAllFollower/:userId",getAllFollower);
router.get("/getAllFollowing/:userId",getAllFollowing)

router.get("/unFollow",unfollowing);
router.get("/removeFollower",removeFollower);

router.get("/spam",userSpam);

router.get("/searchProfile/:keyword",searchProfileByKeyword);
router.get("/searchByArt/:art",searchByArt);
router.get("/searchById/:userId",searchById);
router.get("/searchProfile/viewProfile/:userId",searchById);
router.post("/uploadProfile",uploadProfile);
router.post("/collaborationDetails",collaborationDetails);


router.post("/editProfile/updateDetails",editProfile);
router.get("/editProfile/setting/deleteAccount",deleteAccount);
router.get("/editProfile/setting",settingPage);

router.post("/save",SaveUser);
router.get("/banUser/:userId",banUser);
router.get("/allBanUser",getAllBanUser);
router.get("/unbanUser/:userId",unbanUser);


export default router;