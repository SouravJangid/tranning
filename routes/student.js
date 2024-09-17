const express = require('express');
const router = express.Router();
const StudentController = require('../controller/studentController');


router.post('/add/user',(req , res) => {
    StudentController.addStudent(req, res);
});


router.get('/users',(req , res) => {
    StudentController.getStudent(req, res);
});

router.get('/users/:rollNo',(req , res) => {
    StudentController.getStudentByRollNo(req, res);
});

module.exports = router;