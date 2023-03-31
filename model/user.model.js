import { DataTypes } from "sequelize";
import sequelize from "./dbConfig.js";

const User= sequelize.define("User",{});
    

export default User;