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
        type:DataTypes.STRING

    },
    contactPersonName:{
        type:DataTypes.STRING
    },
    contact:{
        type:DataTypes.STRING,
    }
},{
    timestamps:false
      
});
sequelize.sync().then(()=>{
    console.log("collaborationForm table created...");
}).catch(err=>{
    console.log(err);
});

    

export default collaborationForm;