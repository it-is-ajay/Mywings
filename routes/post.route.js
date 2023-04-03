import express from "express";
import { postPage,getAllComments,getAllLikes,getSavedPost,getAllPost,commentPost,save,likePost, savePost} from "../controller/post.controller.js";
import {body} from "express-validator";


const router = express.Router();

router.get("/postPage",postPage);
router.post("/save",
body("file").notEmpty(),
body("userId").notEmpty(),
body("date").notEmpty()
,save);
router.post("/like",
body("userId").notEmpty().isNumeric(),
body("postId").notEmpty().isNumeric()
,likePost);
router.get("/getPost",getAllPost);
router.get("/getLike",getAllLikes);
router.get("/getSavedPost",getSavedPost);
router.get("/getComment",getAllComments);
router.post("/comment",
body("comment").notEmpty(),
body("userId").notEmpty().isNumeric(),
body("postId").notEmpty().isNumeric()
,commentPost);
router.post("/savePost",
body("userId").notEmpty().isNumeric(),
body("postId").notEmpty().isNumeric(),
savePost);

export default router;