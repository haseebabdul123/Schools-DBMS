import dbConfig from "../Config/connectdb";
import students from "./students";

const Model = dbConfig.Sequelize.Model;

const sequelize = dbConfig.sequelizeT;

const op = dbConfig.Sequelize.Op;

class collageModel extends Model {}

collageModel.init(
  {
    collage_id: {
      type: dbConfig.Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    collage_name: {
      type: dbConfig.Sequelize.STRING,
      allowNull: false,
    },
    collage_branch: {
      type: dbConfig.Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: "College",
  }
);

collageModel.hasMany(students, {
  forignKey: "collage_id",
  targetKey: "student_id",
});

collageModel.list = () => {
  return new Promise(async (resolve, reject) => {
    let data = await collageModel.findAll({
      include: [
        {
          model: students,
        },
      ],
    });
    resolve(data);
  });
};

export default collageModel;
