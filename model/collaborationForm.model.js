import { DataTypes } from "sequelize";
import sequelize from "./dbConfig.js";

const collaborationForm = sequelize.define("collaborationForm",{
    BusinessFirmName :{
        type:DataTypes.STRING,
        allowNull:false
    },
    email :{
        type:DataTypes.STRING,
        unique:true
    },
    address:{
        type:DataTypes.STRING,
        allowNull:false
    },
    contactPersonName:{
        type:DataTypes.NUMBER
    },
    contact:{
        type:DataTypes.NUMBER,
        allowNull:false
    },
    file:{
        type:DataTypes.NUMBER 
    }

});
sequelize.sync().then(()=>{
    console.log("categories table created...");
}).catch(err=>{
    console.log(err);
});

    

export default collaborationForm;