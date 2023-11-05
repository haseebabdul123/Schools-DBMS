import dbConfig from "../Config/connectdb";

const Model = dbConfig.Sequelize.Model;

const sequelize = dbConfig.sequelizeT;

const op = dbConfig.Sequelize.Op;

class classes extends Model {}

classes.init(
  {
    student_id: {
      type: dbConfig.Sequelize.INTEGER,
      allowNull: false,
    },
    class_name: {
      type: dbConfig.Sequelize.STRING,
      allowNull: false,
    },
    class_id: {
      type: dbConfig.Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: "Classes",
  }
);
classes.hasMany(students,{
  forignKey:"student_class",
  targetKey:"student_id"
})

classes.list = ()=>{

  return new Promise (async(resolve,reject)=>{

    let data = await classes.findAll({
      include:[{
        model:students
      }]
    })
    resolve(data)

  })
}
export default classes;
