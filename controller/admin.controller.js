import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import User from "../model/user.model.js";
import jwt from "jsonwebtoken";
import { adminPosts, interestedContestants,collaborationForm } from "../model/association.js";



export const uploadPost = (request, response, next) => {

}


export const editProfile = (request, response, next) => {

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
    let adminPosts = await adminPosts.findAll();
    return response.status(200).json({ adminPosts: adminPosts, status: true });
  }
  catch (err) {
    return response.status(500).json({ error: "Internal server error", status: false });
  }
}


export const deletePost = (request, response, next) => {
  let adminPostId=request.params.adminPostId;
  adminPosts.destroy({
    where: { id: adminPostId }
  }).then(result => {
    return response.status(200).json({ message: "Post removed", status: true });
  }).catch(err => {
    return response.status(500).json({ error: "Internal Server Error", status: false });
  })
}


export const seeRequestForm = async(request, response, next) => {
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


export const viewInterestedContestants =async (request, response, next) => {
try {
    let interestedContestants = await interestedContestants.findAll();
    return response.status(200).json({ interestedContestants: interestedContestants, status: true });
  }
  catch (err) {
    return response.status(500).json({ error: "Internal Server Error", status: false });
  }
}


export const viewSelectedContestants = (request, response, next) => {

}
