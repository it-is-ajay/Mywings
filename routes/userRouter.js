import express from "express";
import {signIn,signOut,editProfile,deleteAccount,settingPage,signUp,serverProfileByKeyword,searchByArt, unfollowing, following, userHelp, searchById, uploadProfile, collaborationDetails} from "../controller/userController.js";
const router=express.Router();
router.post("/signIn",signIn);
router.post("/signUp",signUp);
router.get("/signOut",signOut);
router.get("/signIn/help",userHelp);
router.get("/follow/:userId/:friendId",following);
router.get("/unFollow",unfollowing);
// router.get("/spam",spam);


//.....................

router.get("/searchProfile/:keyword",serverProfileByKeyword);
router.get("/searchByArt/:art",searchByArt);
router.get("/searchById/:userId",searchById);
router.get("/searchProfile/viewProfile/:userId",searchById);
router.post("/uploadProfile",uploadProfile);
router.post("/collaborationDetails",collaborationDetails)

//sachin router start.........

router.post("/editProfile/updateDetails",editProfile);
router.get("/editProfile/setting/deleteAccount",deleteAccount);
router.get("/editProfile/setting",settingPage);
// router.get("/editProfile/setting/help",help);

//sachin router end...........
export default router;