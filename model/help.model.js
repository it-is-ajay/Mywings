import { DataTypes } from "sequelize";
import sequelize from "./dbConfig.js";

const help=sequelize.define("help",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
        
    },
    problem:{
        type:DataTypes.STRING
    }

},{
    timestamps:false
})
sequelize.sync().then(result=>{
    console.log("sucess");
}).catch(err=>{
    console.log("errore");
})

export default help;