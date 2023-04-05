import { DataTypes} from "sequelize";
import sequelize from "./dbConfig.js";


const Post = sequelize.define("post",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    file:{
        type:DataTypes.STRING,
        allowNull:false
    },
    date:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    caption:{
        type:DataTypes.STRING
    },
    location:{
        type:DataTypes.STRING
    }
},{
    timestamps:false
});

Post.sync()
.then(()=>{
    console.log("post table created successfully");
})
.catch(err=>{
    console.log(err);
    console.log("post table creation failed");
})

export default Post;