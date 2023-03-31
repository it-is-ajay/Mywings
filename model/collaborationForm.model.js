import { DataTypes } from "sequelize";
import sequelize from "./dbConfig.js";

const collaborationForm = sequelize.define("collaborationForm",{
    BusinessFirmName :{
        type:DataTypes.STRING
    },
    email :{
        type:DataTypes.STRING,
        unique:true
    },
    address:{
        type:DataTypes.STRING,

    },
    contactPersonName:{
        type:DataTypes.STRING
    },
    contact:{
        type:DataTypes.STRING,
    },
    file:{
        type:DataTypes.STRING
    }

});
sequelize.sync().then(()=>{
    console.log("collaborationFormtable created...");
}).catch(err=>{
    console.log(err);
});

    

export default collaborationForm;