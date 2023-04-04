import { DataTypes } from "sequelize";
import sequelize from "./dbConfig.js";

const following =sequelize.define("following",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true    
    },
    userId:{
        type:DataTypes.INTEGER
    },
    friendUserId:{
        type:DataTypes.INTEGER
    }
})


sequelize.sync().then(result=>{
    console.log("following table created..");
}).catch(err=>{
    console.log("errore");
})

export default following;