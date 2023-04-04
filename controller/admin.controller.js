import User from "../model/user.model.js";
import sequelize from "sequelize";
import interestedContestant from "../model/interestedContestants.model.js";
import viewSelectedContestant from "../model/selectedContestants.model.js";
import Admin from "../model/admin.model.js";
import { adminPosts, collaborationForm } from "../model/association.js";

const Op = sequelize.Op;

export const uploadPost = (request, response, next) => {

}

export const uploadPostSubmit = async (request, response, next) => {
  try {
    await adminPosts.create({
      file: request.body.file,
      caption: request.body.caption,
      locationofYour: request.body.locationofYour,
      date: new Date().toString().substring(4, 15).replaceAll(' ', '/'),
      adminId: request.body.adminId
    })
    return response.status(200).json({ message: "Post uploaded..", status: true })

  }
  catch (err) {
    console.log(err);
    return response.status(500).json({ error: "Internal Server Error", status: false });
  }
}

export const editProfile = async (request, response, next) => {
  try{
  let admin = await Admin.update({
    bio:request.body.bio,
    profilePhoto:request.body.profilePhoto
  },{
    where:{
      id:request.params.adminId
    }
  })
  .then(result => { return result.dataValues });
    return response.status(200).json({ message: " Profile updated ... ", status: true })
}catch(err){
  console.log(err);
}
}

export const viewUsers = async (request, response, next) => {
  try {
    let user = await User.findAll();
    return response.status(200).json({ allUsers: user, status: true });
  }
  catch (err) {
    return response.status(500).json({ error: "Internal server error", status: false });
  }
}

export const viewAllPosts = async (request, response, next) => {
  try {
    let adminPost = await adminPosts.findAll();
    return response.status(200).json({ adminPosts: adminPost, status: true });
  }
  catch (err) {
    return response.status(500).json({ error: "Internal server error", status: false });
  }
}

export const deletePost = (request, response, next) => {
  let adminPostId = request.params.adminPostId;
  adminPosts.destroy({
    where: { id: adminPostId }
  }).then(result => {
    return response.status(200).json({ message: "Post removed", status: true });
  }).catch(err => {
    return response.status(500).json({ error: "Internal Server Error", status: false });
  })
}

export const seeRequestForm = async (request, response, next) => {
  try {
    let collaborationForm = await collaborationForm.findAll();
    return response.status(200).json({ collaborationForm: collaborationForm, status: true });
  }
  catch (err) {
    return response.status(500).json({ error: "Internal Server Error", status: false });
  }
}

export const sendRequest = (request, response, next) => {

}

export const viewInterestedContestants = async (request, response, next) => {
  try {
    let interestedContestants = await interestedContestants.findAll();
    return response.status(200).json({ interestedContestants: interestedContestants, status: true });
  }
  catch (err) {
    return response.status(500).json({ error: "Internal Server Error", status: false });
  }
}

export const intrestedPost = (request,response,next)=>{
  Contestant.create(request.body)
  .then(result=>{
      return response.status(200).json({message:"intrested post are saved...",status:true});
  })
  .catch(err=>{
      return response.status(500).json({error:"Internal server error",status:false});
  })
}

export const viewInterestedContestantsAccept = async (request, response, next) => {
  try {
    let adminPostId = request.body.adminPostId;
    let userId = request.body.userId;
    let selectedContestants = await selectedContestants.findOne({
      raw: true, where: { userId: userId, adminPostId: adminPostId }
    })
    if (selectedContestants) {
      return response.status(200).json({ message: "this user is already added to selected contestants", status: true })
    }
    else {
      await selectedContestants.create({
        adminPostId: request.body.adminPostId,
        userId: request.body.userId
      })
        .then(result => { return result.dataValues });

      return response.status(200).json({ message: "Your entry recorded to selected contestants table ... Thank You ", status: true })
    }
  }
  catch (err) {
    return response.status(500).json({ error: "Internal Server Error", status: false });

  }
}

export const viewSelectedContestants = async (request, response, next) => {
  try {
    let viewSelectedContestants = await viewSelectedContestant.findAll();
    return response.status(200).json({ viewSelectedContestants: viewSelectedContestants, status: true });
  }
  catch (err) {
    console.log(err);
    return response.status(500).json({ error: "Internal server error", status: false });
  }
}

