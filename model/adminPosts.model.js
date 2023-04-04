import { DataTypes } from "sequelize";
import sequelize from "./dbConfig.js";


const adminPosts = sequelize.define("adminPosts",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    file :{
        type:DataTypes.STRING,
        allowNull:false
    },
    caption :{
        type:DataTypes.STRING
    },
    locationOfYour:{
        type:DataTypes.STRING,
        default:"INDORE"
    },
    date:{
        type:DataTypes.STRING
    }

},{
    timestamps:false
})

sequelize.sync().then(()=>{
    console.log("admin posts  table created...");
}).catch(err=>{
    console.log(err);
});

export default adminPosts;