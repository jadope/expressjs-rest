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
router.post('/person/signup', controller.savePerson); //POST Person profile
router.put('/person/profile', controller.updatePerson); //Update Person profile
router.get('/person', controller.getAll); //GET all profiles, students, teachers and those who aren't anything
router.get('/student', controller.getAllStudent); //GET students profiles
app.listen(port) //Starts the sv.
console.log('Magic happens inside the door number ' + port);
