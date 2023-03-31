import { DataTypes } from "sequelize";
import sequelize from "../db/dbconfig.js";

const help=sequelize.define("help",{
    id:{
        type:DataTypes.int,
        allownull:false,
        autoIncrement:true,
        primaryKey:true
        
    },
    problem:{
        type:DataTypes.varchar
    }

})
sequelize.sync().then(result=>{
    console.log("sucess");
}).catch(err=>{
    console.log("errore");
})

export default help;