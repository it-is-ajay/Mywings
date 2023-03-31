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
    location:{
        type:DataTypes.STRING
    },
    date:{
        type:DataTypes.STRING
    }

})

sequelize.sync().then(()=>{
    console.log("categories table created...");
}).catch(err=>{
    console.log(err);
});

export default adminPosts;