import { DataTypes } from "sequelize";
import sequelize from "./dbConfig.js";

const follower=sequelize.define("follower",{
    id:{
        type:DataTypes.INTEGER,
        allownull:false,
        autoIncrement:true,
        primaryKey:true    
    },
    userId:{
        type:DataTypes.INTEGER
    },
    friendUserId:{
        type:DataTypes.INTEGER
    }

},{
    timestamps:false
})
sequelize.sync().then(result=>{
    console.log("follower table created ..");
}).catch(err=>{
    console.log("errore");
})

export default follower;