import { DataTypes } from "sequelize";
import sequelize from "./dbConfig.js";

const User=sequelize.define("user",{
    name :{
        type : DataTypes.STRING
    },
    userName:{
        type:DataTypes.STRING,
        unique : true
    },
    email:{
        type:DataTypes.STRING,
        unique:true  
               
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
        defaultValue : false
    }

},{
    timestamps : false
})
sequelize.sync().then(result=>{
    console.log("sucess");
}).catch(err=>{
    console.log("errore");
})

export default User;