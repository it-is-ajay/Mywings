import { DataTypes } from "sequelize";
import sequelize from "./dbConfig.js";

const selectedContestants = sequelize.define("selectedContestant",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    userId :{
        type:DataTypes.INTEGER
    },
    adminPostId:{
        type:DataTypes.INTEGER
    }
});

sequelize.sync().then(()=>{
    console.log("selectedContestants table created...");
}).catch(err=>{
    console.log(err);
});
    

export default selectedContestants;