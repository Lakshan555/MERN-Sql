import {Sequelize} from "sequelize";

const db = new Sequelize('msern_db','root','',{
    host:"localhost",
    dialect:"mysql"
});

export default db;