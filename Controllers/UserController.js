import React from "react";
import collageModel from "../Model/collageModel";
import students from "../Model/students";
import classes from "../Model/class";
import teachers from "../Model/teachers";
const collage_list = async (req, res) => {
  try {
    //-----Insert Data--------//
    let insertData = await collageModel.BulkCreate([
      {
        collage_id: "1",
        collage_name: "Peace Collage",
        collage_branch: "Hakimabad",
      },
      {
        collage_id: "3",
        collage_name: "Peace Collage",
        collage_branch: "Nowshera",
      },
      {
        collage_id: "3",
        collage_name: "Peace Collage",
        collage_branch: "Mardan",
      },
    ]);
    //----Update Data----//
    let UpdateData = await collageModel.update(
      {
        collage_name: "Peace Collage NOWSHERA",
      },
      {
        where: { id: 2 },
      }
    );
    //-------Delete data--------//
    let DeleteData = await collageModel.destroy({
      where: { collage_id: 2 },
    });
    let result = await collageModel.list();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

//--------Students Data CURD oper-------///

const student_list = async (req, res) => {
  try {
    //----Insert Data----//
    let insertData = await students.BulkCreate([
      {
        collage_id: "1",
        student_id: "8997",
        student_name: "Hassan",
        student_mobile: "031454735",
        student_email: "hassan@gmail.com",
        student_address: "Nowshera",
        student_class: "8",
      },
      {
        collage_id: "3",
        student_id: "89667",
        student_name: "Haseeb",
        student_mobile: "031454545",
        student_email: "haeeb@gmail.com",
        student_address: "mardan",
        student_class: "9",
      },
      {
        collage_id: "2",
        student_id: "87797",
        student_name: "khan",
        student_mobile: "031465735",
        student_email: "khan@gmail.com",
        student_address: "Nowshera",
        student_class: "8",
      },
    ]);
    //----Update Data----//
    let UpdateData = await students.update(
      {
        student_name: "Hassan Khan",
      },
      {
        where: { student_id: 1 },
      }
    );
    //-------Delete data--------//
    let DeleteData = await students.destroy({
      where: { student_id: 2 },
    });

    let result = await students.findAll({});
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};
//--------Classes In School--///
const class_list = async (req, res) => {
  try {
    //-----Insert Data--------//
    let insertData = await classes.BulkCreate([
      {
        student_id: "8997",
        class_name: "Eight",
        class_id: "8",
      },
      {
        student_id: "89667",
        class_name: "Nine",
        class_id: "9",
      },
    ]);
    //----Update Data----//
    let UpdateData = await classes.update(
      {
        class_name: "9",
      },
      {
        where: { class_id: 8 },
      }
    );
    //-------Delete data--------//
    let DeleteData = await classes.destroy({
      where: { class_id: 8 },
    });
    let result = await classes.list();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};
//-----Teachers in School---///
const teacher_list = async (req, res) => {
  try {
    //-----Insert Data--------//
    let insertData = await teachers.BulkCreate([
      {
        teacher_id: "1",
        teacher_name: "Gul Zar",
        class_id: "9",
        course_id: "1",
      },
      {
        teacher_id: "2",
        teacher_name: "ahmad",
        class_id: "8",
        course_id: "2",
      },
      {
        teacher_id: "3",
        teacher_name: "Kashif",
        class_id: "7",
        course_id: "3",
      },
    ]);
    //----Update Data----//
    let UpdateData = await teachers.update(
      {
        teacher_name: "Kashif Ahmad",
      },
      {
        where: { teacher_id: 2 },
      }
    );
    //-------Delete data--------//
    let DeleteData = await teachers.destroy({
      where: { collage_id: 2 },
    });
    let result = await teachers.list();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

export default { collage_list, student_list, class_list, teacher_list };
