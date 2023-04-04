import express from "express";
import {body} from "express-validator";
import {uploadPostSubmit,editProfile,viewUsers,viewAllPosts,deletePost,seeRequestForm,viewInterestedContestantsAccept,sendRequest,viewInterestedContestants,viewSelectedContestants, interestedContestants2} from "../controller/admin.controller.js"; 

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


export default router;