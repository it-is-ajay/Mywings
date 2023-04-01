import { DataTypes } from "sequelize";
import sequelize from "./dbConfig.js";

const follow=sequelize.define("follow",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
        
    }

})
sequelize.sync().then(result=>{
    console.log("sucess");
}).catch(err=>{
    console.log("errore");
})

export default follow;