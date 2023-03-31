import { header, validationResult } from "express-validator";
import User from "../userModel/userModel.js";
import help from "../userModel/helpModel.js";
import follow from "../userModel/followModel.js";
import spam from "../userModel/spamModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { request, response } from "express";
import { where } from "sequelize";

export const signIn = async(request, response, next) => {
     try{
        let user=await User.findOne({
            where:{
                email:request.body.email
            }
        })
        if(user){
         let status = await bcrypt.compare(request.body.password,user.password);
         if(status){
            let payload={subject:user.email};                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
            let token=jwt.sign(payload,"addlffhdkfkdlf");
         return response.status(200).json({messagge:"login succesful",token:token,status:true})
         }
         return response.status(400).json({message:"invalid password",status:true})
        }
        return response.status(400).json({error:"invalid email",status:false});


     }catch(err){
        return response.status(500).json({result:"internal server error",status:false});
     }
}

export const signUp = async (request, response, next) => {
    try {
        let error = await validationResult(request);
        if (!error.isEmpty())
            return response.status(400).json({ result: error.array() });
        let saltyKey = await bcrypt.genSalt(10);
        let saltypassword = await bcrypt.hash(request.body.password,saltyKey);
        request.body.password = saltypassword;
        let user = await User.create(request.body);
        return response.status(200).json({ user: user, status: true });
    } catch (err) {
        return response.status(500).json({ result: "internal server errore", status: false })
    }
}

export const signOut=async(request,response)=>{
    return response.status(200).json({messagge:"login out succesful",token:null,status:true});
}
export const follow=async(request,response)=>{
    try{
        let follower=await follow.findOne({
            where:{
                userId:request.body.userId,
                friendId:request.body.friendId
            }
        })
        if(follower)
            return response.status(200).json({message:"already followed",status:true});
            else{
                let followers=follow.create(request.body);
                return response.status(200).json({message:"follow successful",status:true})
            }

    }catch(err){
        console.log(err);
    }
}
export const unfollow=async(request,response)=>{
    try{
        let unfollow=await follow.findOne({
            where:{
                userId:request.body.userId,
                friendId:request.body.friendId
            }
        })
        if(unfollow)
            return response.status(200).json({message:"follow first",status:true});
            else{
                let unfollow=unfollow.destroy({
                    where:{
                        userId:request.body.userId,
                        friendId:request.body.friendId
                    }
                })
                return response.status(200).json({message:"unfollowed",status:true})
            }

    }catch(err){
        console.log(err);
    }
}

export const help=async(request,response)=>{
    try{
        let help=await help.findOne({
            where:{
                userId:request.body.userId
            }
        })
        if(help)
            return response.status(200).json({message:"already requested",status:true});
            else{
                let helps=help.create(request.body);
                return response.status(200).json({message:"request successful",status:true})
            }

    }catch(err){
        console.log(err);
    }
}
export const spam=async(request,response)=>{
    try{
        let spam=await spam.findOne({
            where:{
                userId:request.body.userId,
                postId:request.body.postId
            }
        })
        if(spam)
            return response.status(200).json({message:"already reported",status:true});
            else{
                let spams=spam.create(request.body);
                return response.status(200).json({message:"spam successful",status:true})
            }

    }catch(err){
        console.log(err);
    }
}

