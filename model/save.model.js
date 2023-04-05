import { DataTypes } from "sequelize";
import sequelize from "./dbConfig.js";

const Save = sequelize.define("save",{
    userId : {
        type:DataTypes.INTEGER,
        allowNull:false
    },
    postId:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
},{
    timestamps:false
});

sequelize.sync()
.then(()=>{
    console.log("Save table is created");
})
.catch(()=>{
    console.log("save method creation faild");
})

export default Save;