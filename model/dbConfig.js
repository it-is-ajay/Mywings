import {Sequelize} from "sequelize";
import mysql2 from "mysql2";

const sequelize = new Sequelize("wings","root","1234",{
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