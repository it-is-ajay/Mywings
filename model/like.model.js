import { DataTypes} from "sequelize";
import sequelize from "./dbConfig.js";


const Like = sequelize.define("like",{
    postId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
},{
    
    timestamps:false
});

Like.sync()
.then(()=>{
    console.log(" like table created successfully");
})
.catch(err=>{
    console.log(err);
    console.log("like table creation failed");
})

export default Like;