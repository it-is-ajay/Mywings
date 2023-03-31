import { DataTypes } from "sequelize";
import sequelize from "./dbConfig.js";

const collaboration = sequelize.define("collaboration",{
    
});


sequelize.sync().then(()=>{
    console.log("categories table created...");
}).catch(err=>{
    console.log(err);
});
export default collaboration;