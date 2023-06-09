import express from "express";
import {body} from "express-validator";
import {uploadPostSubmit,editProfile,viewUsers,viewAllPosts,deletePost,seeRequestForm,viewInterestedContestantsAccept,sendRequest,viewInterestedContestants,viewSelectedContestants, interestedContestants2, signIn, signOut, saveAdminPost, spamUser, viewSpam} from "../controller/admin.controller.js"; 

const router = express.Router();



router.post("/uploadPost/submit",uploadPostSubmit)

router.post("/editProfile/:adminId",editProfile);

router.get("/viewUsers",viewUsers);

router.get("/viewAllPosts",viewAllPosts);

router.get("/deletePost/:adminPostId",deletePost);

router.post("/seeRequestForm",seeRequestForm);

router.post("/sendRequest",sendRequest);


router.post("/interestedContestants",interestedContestants2);
router.get("/viewInterestedContestants",viewInterestedContestants);
router.post("/viewInterestedContestants/accept",viewInterestedContestantsAccept);
router.get("/viewSelectedContestants",viewSelectedContestants);

router.post("/signIn",signIn);
router.post("/signOut",signOut);
router.post("/save",saveAdminPost);
router.post("/spam",spamUser);
router.post("/viewSpam",viewSpam);


export default router;