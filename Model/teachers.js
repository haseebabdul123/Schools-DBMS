import dbConfig from "../Config/connectdb";
import classes from "./class";

const Model = dbConfig.Sequelize.Model;

const sequelize = dbConfig.sequelizeT;

const op = dbConfig.Sequelize.Op;

class teachers extends Model {}

teachers.init(
  {
    teacher_id: {
      type: dbConfig.Sequelize.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    teacher_name: {
      type: dbConfig.Sequelize.STRING,
      allowNull: false,
    },
    class_id: {
      type: dbConfig.Sequelize.INTEGER,
      allowNull: false,
    },
    course_id: {
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
teachers.belongsTo(classes,{
    forignKey:"class_name",
    targetKey:"class_id"
  })
  
  teachers.list = ()=>{
  
    return new Promise (async(resolve,reject)=>{
  
      let data = await teachers.findAll({
        include:[{
          model:classes
        }]
      })
      resolve(data)
  
    })
  }
export default students;
