import { validationResult } from "express-validator";
import User from "../model/user.model.js";
import help from "../model/help.model.js";
import follower from "../model/follower.model.js";
import spam from "../model/spamModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import following from "../model/following.model.js";


export const signIn = async (request, response, next) => {
    try {
        let user = await User.findOne({
            where: {
                email: request.body.email
            }
        })
        if (user) {
            let status = await bcrypt.compare(request.body.password, user.password);
            if (status) {
                let payload = { subject: user.email };
                let token = jwt.sign(payload, "addlffhdkfkdlf");
                return response.status(200).json({ messagge: "login succesful", token: token, status: true })
            }
            return response.status(400).json({ message: "invalid password", status: true })
        }
        return response.status(400).json({ error: "invalid email", status: false });
    } catch (err) {
        console.log(err);
        return response.status(500).json({ result: "internal server error", status: false });
    }
}

export const signUp = async (request, response, next) => {
    try {
        let error = await validationResult(request);
        if (!error.isEmpty())
            return response.status(400).json({ result: error.array() });
        let saltyKey = await bcrypt.genSalt(10);
        let saltypassword = await bcrypt.hash(request.body.password, saltyKey);
        request.body.password = saltypassword;
        let user = await User.create(request.body);
        return response.status(200).json({ user: user, status: true });
    } catch (err) {
        console.log(err);
        return response.status(500).json({ result: "internal server errore", status: false })
    }
}

export const signOut = async (request, response) => {
    return response.status(200).json({ messagge: "log out succesful", token: null, status: true });
}

export const userfollower = async (request, response) => {
    try {
        let followerFound = await follower.findOne({where: {userId: request.body.userId,friendId: request.body.friendId}})
        
        if (followerFound)
            return response.status(200).json({ message: "already followed", status: true });
        else {
            let followers = await follower.create(request.body);
            return response.status(200).json({ message: "follow successful", status: true })
        }

    } catch (err) {
        //console.log(err);
        return response.status(500).json({ result: "internal server error", status: false });

    }
}

export const userfollowing = async (request, response) => {
    try {
        let followingFound = await following.findOne({
            where: {
                userId: request.body.userId,
                friendId: request.body.friendId
            }
        })
        if (followingFound)
            return response.status(200).json({ message: "already followed", status: true });
        else {
            let followers = await following.create(request.body);
            return response.status(200).json({ message: "follow successful", status: true })
        }

    } catch (err) {
       // console.log(err);
        return response.status(500).json({ result: "internal server error", status: false });
    }
}

export const getAllFollower = async (request, response) => {
    try {
        let follow = await follower.findAll({where:{userId:request.body.userId}});
        return response.status(200).json({ follow: follow, status: true });
    }
    catch (err) {
        //console.log(err);
        return response.status(500).json({ error: "Internal server error", status: false });
    }
}


export const getAllFollowing = async (request, response) => {
    try {
        let following = await following.findAll({where:{userId:request.body.userId}});
        return response.status(200).json({ following: following, status: true });
    }
    catch (err) {
        //console.log(err);
        return response.status(500).json({ error: "Internal server error", status: false });
    }
}




export const unfollowing = async (request, response) => {
    try {
        let unfollow = await following.findOne({where: {userId: request.body.userId,friendId: request.body.friendId}})
        
        if (unfollow)
            return response.status(200).json({ message: "follow first", status: true });
        else {
            await following.destroy({where: {friendId: request.body.friendId}})
            return response.status(200).json({ message: "unfollowed", status: true })
        }
    } catch (err) {
        console.log(err);
        return response.status(500).json({ result: "internal server error", status: false });
    }
}

export const removeFollower = async (request, response) => {
    try {
        let remove = await follower.findOne({where: {userId: request.body.userId,friendId: request.body.friendId}})
        
        if (remove)
            return response.status(200).json({ message: "follow first", status: true });
        else {
            let unfollow = follower.destroy({where: {friendId: request.body.friendId}})
            return response.status(200).json({ message: "unfollowed", status: true })
        }
    } catch (err) {
        console.log(err);
        return response.status(500).json({ result: "internal server error", status: false });
    }
}



export const userHelp = async (request, response) => {
    try {
        let help = await help.findOne({
            where: {
                userId: request.body.userId
            }
        })
        if (help)
            return response.status(200).json({ message: "already requested", status: true });
        else {
            let helps = help.create(request.body);
            return response.status(200).json({ message: "request successful", status: true })
        }

    } catch (err) {
        console.log(err);
        return response.status(500).json({ result: "internal server error", status: false });

    }
}
export const userSpam = async (request, response) => {
    try {
        let spam = await spam.findOne({
            where: {
                userId: request.body.userId,
                postId: request.body.postId
            }
        })
        if (spam)
            return response.status(200).json({ message: "already reported", status: true });
        else {
            let spams = spam.create(request.body);
            return response.status(200).json({ message: "spam successful", status: true })
        }

    } catch (err) {
        console.log(err);
        return response.status(500).json({ result: "internal server error", status: false });
    }
}

export const serverProfileByKeyword = async (request, response) => {
    try {
        return response.status(200).json({
            user: await User.findAll({
                where: {
                    userName: {
                        [Op.like]: "%" + request.params.keyword + "%"
                    }
                }
            }), status: true
        });
    } catch (err) { return response.status(500).json({ error: "Internal Server Error", status: false }); }
}

export const searchByArt = async (request, response) => {
    try {
        return response.status(200).json({
            aritst: await User.findAll({
                where: {
                    art: request.params.art
                }
            })
        })
    } catch (err) { return response.status(500).json({ error: "Internal server error", status: false }) };

}

export const searchById = async (request, response) => {
    try {
        let user = await User.findByPk(request.params.userId);
        if (user)
            return response.status(200).json({ user, status: true });
        return response.status(400).json({ message: "bad request...", status: true });
    } catch (err) { return response.status(500).json({ error: "Internal server error", status: false }) };
}

export const uploadProfile = async (request, response) => {
    try {
        return response.status(200).json({
            user: await User.update({ profilePhoto: request.body.profilePhoto }, {
                where: { id: request.body.id }
            }), status: true
        });
    } catch (err) { return response.status(500).json({ error: "Internal server error", status: false }) }
}

export const collaborationDetails = async (request, response) => {
    try {
        return response.status(200).json({ user: await collaborationForm.create(request.body), status: true });
    } catch (err) { return response.status(500).json({ error: "Internal server error", status: false }) }

}