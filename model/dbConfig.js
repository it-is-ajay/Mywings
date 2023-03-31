import {Sequelize} from "sequelize";
import mysql2 from "mysql2";

const sequelize = new Sequelize("artist","root","krati@2003",{
    host:"localhost",
    dialect:"mysql"
})

sequelize.authenticate()
.then(()=>{
    console.log("database connected");
})
.catch(err=>{
    console.log(err);
})

export default sequelize;