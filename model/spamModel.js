import { DataTypes } from "sequelize";
import sequelize from "./dbConfig.js";

const spam=sequelize.define("spam",{
    id:{
        type:DataTypes.INTEGER,
        allownull:false,
        autoIncrement:true,
        primaryKey:true
        
    }

})
sequelize.sync().then(result=>{
    console.log("sucess");
}).catch(err=>{
    console.log("errore");
})

export default spam;