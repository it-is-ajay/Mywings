import express from "express";
import {body} from "express-validator";
import {uploadPost,editProfile,viewUsers,viewAllPosts,deletePost,seeRequestForm,sendRequest,viewInterestedContestants,viewSelectedContestants} from "../controller/admin.controller.js"; 

const router = express.Router();


router.post("/uploadPost",uploadPost);

router.post("/editProfile",editProfile);

router.post("/viewUsers",viewUsers);

router.post("/viewAllPosts",viewAllPosts);

router.post("/deletePost/:adminPostId",deletePost);

router.post("/seeRequestForm",seeRequestForm);

router.post("/sendRequest",sendRequest);

router.post("/viewInterestedContestants",viewInterestedContestants);

router.post("/viewSelectedContestants",viewSelectedContestants);


export default router;