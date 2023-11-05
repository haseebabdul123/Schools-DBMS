import express from "express";
import UserController from "./controllers/UserController";
const port = 3000;

app.get("./colleges", UserController.collage_list);
app.get("./students", UserController.student_list);
app.get("./classes", UserController.class_list);
app.get("./teachers", UserController.teacher_list);

app.listen(port, () => {
  console.log(`App is Running at http://localhost:${port}`);
});
