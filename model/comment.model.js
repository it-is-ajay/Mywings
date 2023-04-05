import { DataTypes} from "sequelize";
import sequelize from "./dbConfig.js";


const Comment = sequelize.define("comment",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    comment:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    postId:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
},{
    timestamps:false
});

Comment.sync()
.then(()=>{
    console.log("comment table created successfully");
})
.catch(err=>{
    console.log(err);
    console.log("cmment table creation failed");
})

export default Comment;