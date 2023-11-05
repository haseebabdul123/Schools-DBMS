import { Sequelize, Model, DataType, DataTypes } from "sequelize";

let dbConfig = {
  db_name: "",
  db_user: "",
  db_password: "",
  con_type: "mysql",
  port: "3306",
  host: "localhost",
};

const sequelizeT = new Sequelize(
  dbConfig.db_name,
  dbConfig.db_user,
  dbConfig.db_password,
  {
    host: dbConfig.host,
    dialect:dbConfig.con_type,
    port:dbConfig.port
  }
);

const connection =  {}

connection.Sequelize = Sequelize;
connection.sequelizeT = sequelizeT;
connection.Model = Model;
connection.DataTypes = DataTypes;

export default connection;
