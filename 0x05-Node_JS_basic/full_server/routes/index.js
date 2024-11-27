const express = require("express");
const AppController = require("../controllers/AppController");
const StudentController = require("../controllers/StudentsController");

const appController = AppController();
const studentController = StudentController();
const app = express();

app.get("/", appController.getHomePage);

app.get("/students", studentController.getAllStudents);
app.get("/students/:major", studentController.getAllStudentsByMajor);

module.exports = app;
