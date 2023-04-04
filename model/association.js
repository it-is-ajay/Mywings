import adminPosts from "./adminPosts.model.js";
import interestedContestants from "./interestedContestants.model.js";
import selectedContestants from "./selectedContestants.model.js";
import collaborationForm from "./collaborationForm.model.js";
import collaboration from "./collaborationWith.model.js";
import User from "./user.model.js";
import Admin from "./admin.model.js";


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





export {User,adminPosts,interestedContestants,selectedContestants,collaborationForm,collaboration};