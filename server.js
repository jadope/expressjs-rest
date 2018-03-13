const express = require('express'); // call express
const app = express(); // define our application using express
const bodyParser = require('body-parser');  //Gets the parameters from the body. 
const mongoose = require('mongoose'); //Our ORM. 
const controller = require('./controllers/controller'); //Functions




var port = process.env.PORT || 420; // set our port
var router = express.Router();
app.use(bodyParser.urlencoded({ extended: false })); //this will let us get the info from a POST.
app.use(bodyParser.json());

app.use('/', router); //app.use obtiene el prefijo de URL que desea y el manejador de ruta para él. Esto permite la modularidad en el enrutamiento del lado del servidor.pp.listen(port, function(){
router.get('/', controller.getSomeone) //GETS someone, a student, teacher or person by the email.
router.get('/person', controller.getAll); //GETs all profiles, students, teachers and those who aren't anything
router.post('/person', controller.savePerson); //POST Person profile
router.put('/person', controller.updatePerson); //Update Person profile
router.delete('/person', controller.deletePerson); //Deletes a person profile by email.
router.get('/student', controller.getAllStudent); //GET students profiles
router.post('/student', controller.saveStudent); //POST a new student profiles
router.put('/student', controller.updateStudent); //Update student profile
router.delete('/student', controller.deleteStudent); //Deletes only the especialized fields for students. (If you want to delet all, need to delet a person)
router.get('/teacher', controller.getAllTeachers); //GET students profiles
router.post('/teacher', controller.saveTeacher); //POST a new student profiles
router.put('/teacher', controller.updateTeacher); //Update student profile
router.delete('/teacher', controller.deleteTeacher); //Deletes only the especialized fields for students. (If you want to delet all, need to delet a person)


app.listen(port) //Starts the sv.
console.log('Magic happens inside the door number ' + port);
