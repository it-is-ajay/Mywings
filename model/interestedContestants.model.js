import { DataTypes } from "sequelize";
import sequelize from "./dbConfig.js";

const interestedContestants = sequelize.define("interestedContestants",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    }
});
    

export default interestedContestants;