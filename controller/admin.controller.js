import User from "../model/user.model.js";
import interestedContestant from "../model/interestedContestants.model.js";
import viewSelectedContestant from "../model/selectedContestants.model.js";
import Admin from "../model/admin.model.js";
import { adminPosts, collaborationForm } from "../model/association.js";


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
  let admin = await Admin.update({bio:request.body.bio,profilePhoto:request.body.profilePhoto},{where:{id:request.params.adminId}})
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
export const interestedContestants2 = async (request, response, next) => {
  try {
    let user = await User.findOne({ where: { id: request.body.userId } });

    if (user.dataValues.art == "NULL") {
      console.log(user.dataValues.art)
      return response.status(200).json({ message: "you are not an artist", status: true });
    } else {
      let interestedContestants = await interestedContestant.findOne({
        where: {
          userId: request.body.userId,
          adminPostId: request.body.adminPostId
        }
      })
      if (interestedContestants) {
        return response.status(200).json({ message: "your interest already added.. ", status: true })
      }
      else {
        await interestedContestant.create({
          userId: request.body.userId,
          adminPostId: request.body.adminPostId
        }).then(result => { return result.dataValues });

        return response.status(200).json({ message: "thank you ..", status: true })
      }
    }
  }
  catch (err) {
    console.log(err);
    return response.status(500).json({ error: "Internal Server Error", status: false });
  }
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

export const signIn = async (request,response,next)=>{
  let admin =  await Admin.findOne({
      where : {
          email : request.body.email
      }
  });
  if(admin.adminValues.email == request.body.email && admin.adminValues.password == request.body.password)
     {
      let payload={subject:admin.email};                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
      let token=jwt.sign(payload,"addlffhdkfkdlf");
      return response.status(200).json({message : "login succesfull...",status : true}); 
     }
  else
  return response.status(400).json({message : "login failed",status : false});
}

export const saveAdminPost = (request,response,next)=>{
  console.log(request.body);
  AdminPost.create(request.body)
  .then(result=>{
      return response.status(200).json({message:"adminPost saved",status:true});
  })
  .catch(err=>{
      return response.status(500).json({error:"Internal server errror"});
  });
}

export const spamUser = (request,response,next)=>{
  console.log(request.body);
  SpamUser.create(request.body)
  .then(result=>{
      return response.status(200).json({message:"spam user done",status:true});
  })
  .catch(err=>{
      return response.status(500).json({error:"Internal server error",status:false});
  })
}

export const viewSpam = (request,response,next)=>{
  console.log(request.body);
  SpamUser.findAll(request.body)
  .then(result=>{
      return response.status(200).json({allSpamUser:result,status:true});
  })
  .catch(err=>{
      return response.status(500).json({error:"Internal server error",status:false});
  })
}
export const signOut = (request,response)=>{
  return response.status(200).json({message:"loged out",token:null,status:true});
}
