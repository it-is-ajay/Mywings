import adminPosts from "./adminPosts.model.js";
import interestedContestants from "./interestedContestants.model.js";
import selectedContestants from "./selectedContestants.model.js";
import collaborationForm from "./collaborationForm.model.js";
import collaboration from "./collaborationWith.model.js";
import User from "./user.model.js";
import Admin from "./admin.model.js";
import Comment from "./comment.model.js";
import Like from "./like.model.js";
import Save from "./save.model.js";
import Post from "./post.model.js";

User.hasMany(Post, { foreignKey: "userId" });
Post.belongsTo(User, { foreignKey: "userId" });

Post.hasMany(Like, { foreignKey: "postId", targetKey: "id" });
Like.belongsTo(Post, { foreignKey: "postId", targetKey: "id" });

User.hasMany(Like, { foreignKey: "userId", targetKey: "id" });
Like.belongsTo(User, { foreignKey: "userId", targetKey: "id" });

Post.hasMany(Comment, { foreignKey: "postId", targetKey: "id" });
Comment.belongsTo(Post, { foreignKey: "postId", targetKey: "id" });

User.hasMany(Comment, { foreignKey: "userId", targetKey: "id" });
Comment.belongsTo(User, { foreignKey: "userId", targetKey: "id" });

Post.hasMany(Save, { foreignKey: "postId", targetKey: "id" });
Save.belongsTo(Post, { foreignKey: "postId", targetKey: "id" });

User.hasMany(Save, { foreignKey: "userId", targetKey: "id" });
Save.belongsTo(User, { foreignKey: "userId", targetKey: "id" });

Admin.hasMany(adminPosts,{foreignKey:"adminId",targetKey:"id"});
adminPosts.belongsTo(Admin);

User.hasMany(interestedContestants,{foreignKey:"userId",targetKey:"id"});
interestedContestants.belongsTo(User);

adminPosts.hasMany(interestedContestants,{foreignKey:"adminPostId",targetKey:"id"});
interestedContestants.belongsTo(adminPosts);

adminPosts.hasMany(selectedContestants,{foreignKey:"adminPostId",targetKey:"id"});
selectedContestants.belongsTo(adminPosts);

User.hasMany(selectedContestants,{foreignKey:"userId",targetKey:"id"});
selectedContestants.belongsTo(User);


export {User,Like,Comment,Post,Save,adminPosts,interestedContestants,selectedContestants,collaborationForm,collaboration};
