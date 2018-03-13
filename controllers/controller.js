var persona = require('../models/schema');


function getAll(req, res) {  //Gets all the people from DB

  persona.find({}, (err, people) => {
    res.status(200).send(people)
  })
}

function getSomeone(req, res) { //gets anyone on the DB by the email.

  persona.find({ email: req.param.emailF }, (err, people) => {
    console.log(`estamos tratando de imprimir y ${people}`);
    console.log(req.param.emailF);
    console.log(req.header.emailF);

    
    res.status(200).send(people)
  })
}


function savePerson(req, res) {

  var person = new persona({ //F at the end, means that it's gotten from Form.
    name: req.body.nameF,
    email: req.body.emailF,
    age: req.body.ageF,
    cellphone: req.body.cellphoneF,
    country: req.body.countryF,
    address: req.body.addressF,
    gender: req.body.genderF,
    identifier: req.body.identifierF //Means if it's student / teacher. Otherwise will be a Person.
  })
  person.save((err) => {
    if (err) res.status(500).send({ message: `Error while giving birth the person: ${err}` })
    return res.status(201).send({ message: 'The person was born.' })
  })
}

function updatePerson(req, res) {

  persona.findOne({ email: req.body.emailF }, (err, updated) => { //Update by the parameter email. - Should've been done with findOneAndUpdate but couldn't deal with it.  
    if (err) res.status(500).send({ message: `Error updating the person: ${err}` });
    if (req.body.nameF != undefined) updated.name = req.body.nameF; //IFs to make sure there are data on the body.
    if (req.body.ageF != undefined) updated.age = req.body.ageF;
    if (req.body.cellphoneF != undefined) updated.cellphone = req.body.cellphoneF;
    if (req.body.countryF != undefined) updated.country = req.body.countryF;
    if (req.body.addressF != undefined) updated.address = req.body.addressF;
    if (req.body.genderF != undefined) updated.gender = req.body.genderF;
    if (req.body.identifierF != undefined) updated.identifier = req.body.identifierF;
    updated.save(function () {
      res.send("Data updated.");
    });
  })
}

function deletePerson(req, res) { //delete for people

  persona.findOneAndRemove({ email: req.body.emailF }, (err, personDeleted) => { //Deletes by the parameter email.  
    if (!err && (req.body.emailF != undefined)) res.send("Person deleted!");
    else res.send("There was a mistake while deleting the register, check if you entered a valid email.")
  })
}

function getAllStudent(req, res) {

  persona.find({ identifier: 'student' }, (err, people) => {
    res.status(200).send(people)
  })
}


function saveStudent(req, res) {

  var person = new persona({ //F at the end, means that it's gotten from Form.
    name: req.body.nameF,
    email: req.body.emailF,
    age: req.body.ageF,
    cellphone: req.body.cellphoneF,
    country: req.body.countryF,
    address: req.body.addressF,
    gender: req.body.genderF,
    identifier: 'student',
    semester: req.body.semesterF,
    numberSubjects: req.body.numberSubjectsF,
    credits: req.body.creditsF,
    carrer: req.body.carrerF,
    university: req.body.universityF
  })
  person.save((err) => {
    if (err) res.status(500).send({ message: `Error while creating a student, future of the country: ${err}` })
    return res.status(201).send({ message: 'The student is registered.' })
  })
}

function updateStudent(req, res) {

  persona.findOne({ email: req.body.emailF }, (err, updated) => { //Update by the parameter email. - Should've been done with findOneAndUpdate but couldn't deal with it.  
    if (err) res.status(500).send({ message: `Error updating the person: ${err}` });
    if (req.body.nameF != undefined) updated.name = req.body.nameF; //IFs to make sure there are data on the body.
    if (req.body.ageF != undefined) updated.age = req.body.ageF;
    if (req.body.cellphoneF != undefined) updated.cellphone = req.body.cellphoneF;
    if (req.body.countryF != undefined) updated.country = req.body.countryF;
    if (req.body.addressF != undefined) updated.address = req.body.addressF;
    if (req.body.genderF != undefined) updated.gender = req.body.genderF;
    if (req.body.identifierF != undefined) updated.identifier = updated.identifier;//Can't change, because it'll remain with data that doesn't belong to a non-student. If you want to change it, use deletStudent first!
    if (req.body.semesterF != undefined) updated.semester = req.body.semesterF; 
    if (req.body.numberSubjectsF != undefined) updated.numberSubjects = req.body.numberSubjectsF;
    if (req.body.creditsF != undefined) updated.credits = req.body.creditsF;
    if (req.body.carrerF != undefined) updated.carrer = req.body.carrerF;
    if (req.body.universityF != undefined) updated.university = req.body.universityF;
    updated.save(function () {
      res.send("Student data has been updated");
    });
  })
}

function deleteStudent(req, res) {

  persona.findOne({ email: req.body.emailF }, (err, updated) => { //Update by the parameter email. - Should've been done with findOneAndUpdate but couldn't deal with it.  
    if (err) res.status(500).send({ message: `Error updating the person: ${err}` });
    updated.name = updated.name;
    updated.age = updated.age;
    updated.cellphone = updated.cellphone 
    updated.country = updated.country 
    updated.address = updated.address
    updated.gender = updated.gender
    updated.identifier = 'I used to be a student';
    updated.save(function () {
      res.send("The person has left his studies.");
    });
  })
}




function getAllTeachers(req, res) {

  persona.find({ identifier: 'teacher' }, (err, people) => {
    res.status(200).send(people)
  })
}


function saveTeacher(req, res) {

  var person = new persona({ //F at the end, means that it's gotten from Form.
    name: req.body.nameF,
    email: req.body.emailF,
    age: req.body.ageF,
    cellphone: req.body.cellphoneF,
    country: req.body.countryF,
    address: req.body.addressF,
    gender: req.body.genderF,
    identifier: 'teacher',
    experience: req.body.experienceF,
    workArea: req.body.workAreaF,
    coursesInCharge: req.body.coursesInChargeF,
    dictatesLaboratories: req.body.dictatesLaboratoriesF
  })
  person.save((err) => {
    if (err) res.status(500).send({ message: `Error while creating a student, future of the country: ${err}` })
    return res.status(201).send({ message: 'The student is registered.' })
  })
}

function updateTeacher(req, res) {

  persona.findOne({ email: req.body.emailF }, (err, updated) => { //Update by the parameter email. - Should've been done with findOneAndUpdate but couldn't deal with it.  
    if (err) res.status(500).send({ message: `Error updating the person: ${err}` });
    if (req.body.nameF != undefined) updated.name = req.body.nameF; //IFs to make sure there are data on the body.
    if (req.body.ageF != undefined) updated.age = req.body.ageF;
    if (req.body.cellphoneF != undefined) updated.cellphone = req.body.cellphoneF;
    if (req.body.countryF != undefined) updated.country = req.body.countryF;
    if (req.body.addressF != undefined) updated.address = req.body.addressF;
    if (req.body.genderF != undefined) updated.gender = req.body.genderF;
    if (req.body.identifierF != undefined) updated.identifier = updated.identifier;//Can't change, because it'll remain with data that doesn't belong to a non-teacher. If you want to change it, use deletTeacher first!
    if (req.body.experienceF != undefined) updated.experience = req.body.experienceF;
    if (req.body.workAreaF != undefined) updated.workArea = req.body.workAreaF;
    if (req.body.coursesInChargeF != undefined) updated.coursesInCharge = req.body.coursesInChargeF;
    if (req.body.dictatesLaboratoriesF != undefined) updated.dictatesLaboratories = req.body.dictatesLaboratoriesF;
    if (req.body.universityF != undefined) updated.university = req.body.universityF;
    updated.save(function () {
      res.send("Teacher's data has been updated.");
    });
  })
}


function deleteTeacher(req, res) {

  persona.findOne({ email: req.body.emailF }, (err, restored) => { //Update by the parameter email. - Should've been done with findOneAndUpdate but couldn't deal with it.  
    if (err) res.status(500).send({ message: `Error updating the person: ${err}` });
    restored.name = restored.name;
    restored.age = restored.age;
    restored.cellphone = restored.cellphone 
    restored.country = restored.country 
    restored.address = restored.address
    restored.gender = restored.gender
    restored.identifier = 'I used to be a teacher';
    restored.save(function () {
      res.send("The person has left his studies.");
    });
  })
}

module.exports = { // Exports the methods
  
  getAll,
  getSomeone,

  savePerson,
  updatePerson,
  deletePerson,

  getAllStudent,
  saveStudent,
  updateStudent,
  deleteStudent,

  getAllTeachers,
  saveTeacher,
  updateTeacher,
  deleteTeacher

};