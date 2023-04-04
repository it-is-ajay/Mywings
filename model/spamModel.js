import { DataTypes } from "sequelize";
import sequelize from "./dbConfig.js";

const spam=sequelize.define("spam",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true    
    },
    postId:{
        type:DataTypes.INTEGER
    },
    userId:{
        type :DataTypes.INTEGER
    }

},{
    timestamps:false
})
sequelize.sync().then(result=>{
    console.log("sucess");
}).catch(err=>{
    console.log("errore");
})

export default spam;