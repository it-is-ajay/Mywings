import { header, validationResult } from "express-validator";
import { Op } from 'sequelize';
import User from "../model/user.model.js";
import help from "../model/helpModel.js";
import follow from "../model/followModel.js";
import spam from "../model/spamModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { request, response } from "express";
import collaboration from "../model/collaborationWith.model.js";
import collaborationForm from "../model/collaborationForm.model.js";

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
        console.log(err);
        return response.status(500).json({ result: "internal server errore", status: false })
    }
}

export const signOut=async(request,response)=>{
    return response.status(200).json({messagge:"login out succesful",token:null,status:true});
}

export const following=async(request,response)=>{
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
export const unfollowing=async(request,response)=>{
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

export const userHelp=async(request,response)=>{
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
export const userSpam=async(request,response)=>{
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

export const serverProfileByKeyword = async (request,response)=>{
    try{
        return response.status(200).json({user: await User.findAll({
            where:{
                userName :{
                    [Op.like]: "%"+request.params.keyword+"%"
                }
            }
        }), status: true});
    }catch(err){return response.status(500).json({error: "Internal Server Error", status: false});}        
}

export const searchByArt = async (request,response)=>{
    try{
        return response.status(200).json({aritst : await User.findAll({
            where : {
                art : request.params.art
            }
        })})
    }catch(err){return response.status(500).json({error: "Internal server error" ,status : false})};
    
}

export const searchById = async (request,response)=>{
    try{
        let user = await User.findByPk(request.params.userId);
        if(user)
            return response.status(200).json({user, status: true});
        return response.status(400).json({message : "bad request...", status: true});
    }catch(err){return response.status(500).json({error : "Internal server error" ,status : false})};
}

export const uploadProfile = async (request,response)=>{
    try{
        return response.status(200).json({user : await User.update({profilePhoto: request.body.profilePhoto},{
            where:{id: request.body.id}
        }), status: true});
    }catch(err){return response.status(500).json({error : "Internal server error" ,status : false})}
}

export const collaborationDetails = async (request,response)=>{
    try{
        return response.status(200).json({user : await collaborationForm.create(request.body), status: true});
    }catch(err){return response.status(500).json({error : "Internal server error" ,status : false})}
    
}

//sachin controller data start...............

export const editProfile = async (request,response,next)=>{
    try {
     let errors = validationResult(request);
     if(!errors.isEmpty())
         return response.status(400).json({error:"bad request",status:false});
     User.update(request.body,{where:{id:request.body.id}});
     return response.status(200).json({message:"data updated",status:true});
    } catch (error) {
     console.log(error);
     return response.status(500).json({error:"internal server error"});
    }
 }
 
 export const deleteAccount = async(request,response,next)=>{
     // let userDetails = await User.findOne({where:{id:request.body.id}});
     User.destroy({where:{id:request.body.id}})
     .then((result)=>{return response.status(200).json({message:"user deleted",status:true});})
     .catch((err)=>{return response.status(500).json({error:"internal server error",status:false})});
     // return response.status(200).json({result:userDetails,status:true})
 }
 
 export const settingPage = (request,response,next)=>{
     return response.status(200).json({message:"on setting page",status:true});
 }
 

//sachin controller data end.................