import { DataTypes } from "sequelize";
import sequelize from "../db/dbconfig.js";

const User=sequelize.define("user",{
    userName:{
        type:DataTypes.STRING,
               
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
        validate:{
            isEmail :true
        }     
               
    },
    password:{
        type:DataTypes.STRING,
    },

    contact:{
        type:DataTypes.STRING,
    },
    gender:{
        type:DataTypes.STRING,
    },
    address:{
        type:DataTypes.STRING,
    },
    art:{
        type:DataTypes.STRING,
    },
    profilePhoto:{
        type:DataTypes.STRING,
    },
    status:{
        type:DataTypes.TINYINT,
    }

})
sequelize.sync().then(result=>{
    console.log("sucess");
}).catch(err=>{
    console.log("errore");
})

export default User;