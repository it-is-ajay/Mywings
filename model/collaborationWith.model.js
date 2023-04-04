import { DataTypes } from "sequelize";
import sequelize from "./dbConfig.js";

const collaboration = sequelize.define("collaboration",{
    
},{
    timestamps:false
});


sequelize.sync().then(()=>{
    console.log("collaboration table created...");
}).catch(err=>{
    console.log(err);
});
export default collaboration;