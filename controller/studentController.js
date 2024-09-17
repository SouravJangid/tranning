const Student= require('../models/studentModuel');
async function addStudent(req,res){
    try{
        console.log(req.body);
        let student = new Student(req.body);
        await student.save();
        console.log("data saved successfully....");
        res.end('done.');
    }catch(e){
        console.error(e);
        res.status(500).send('Server Error');
    }
}


async function getStudent(req, res){
    try{
        let students = await Student.find({});
        res.send(students);
    }catch(e){
        console.error(e);
        res.status(500).send('Server Error');
    }
}


async function getStudentByRollNo(req, res){
    try{
        let student = await Student.findOne({rollNo: req.params.rollNo});
        res.send(student);
    }catch(e){
        console.error(e);
        res.status(500).send('Server Error');
    }
}


module.exports = {addStudent,getStudent,getStudentByRollNo};