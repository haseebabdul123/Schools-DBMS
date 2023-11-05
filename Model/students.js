import dbConfig from "../Config/connectdb";

const Model = dbConfig.Sequelize.Model;

const sequelize = dbConfig.sequelizeT;

const op = dbConfig.Sequelize.Op;

class students extends Model {}

students.init(
  {
    collage_id: {
      type: dbConfig.Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    student_id: {
      type: dbConfig.Sequelize.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    student_name: {
      type: dbConfig.Sequelize.STRING,
      allowNull: false,
    },
    student_mobile: {
      type: dbConfig.Sequelize.INTEGER,
      allowNull: false,
    },
    student_email: {
      type: dbConfig.Sequelize.STRING,
      allowNull: true,
    },
    student_address: {
      type: dbConfig.Sequelize.STRING,
      allowNull: false,
    },
    student_class: {
      type: dbConfig.Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: "Students",
  }
);

export default students;
