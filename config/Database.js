import {Sequelize} from "sequelize";

const db = new Sequelize('crud_db','root','',{
    host: '34.69.197.153',
    dialect: 'mysql'
});

export default db;