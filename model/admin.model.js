import { DataTypes } from "sequelize";
import sequelize from "./dbConfig.js";

const Admin=sequelize.define("admin",{
    userName:{
        type:DataTypes.STRING,
        unique:true           
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
    bio:{
        type:DataTypes.STRING,
    },
    profilePhoto:{
        type:DataTypes.STRING,
    }
    
},{
    timestamps:false
})

sequelize.sync().then(result=>{
    console.log("Admin table created ");
}).catch(err=>{
    console.log("errore");
})

export default Admin;