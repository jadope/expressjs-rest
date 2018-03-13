var persona = require('../models/schema');


function getAll(req, res) {  //Gets all the people from DB

  persona.find({}, (err, people) => { 
      res.status(200).send(people)  
  })
}

function savePerson(req, res) {

    var person = new persona ({ //F at the end, means that it's gotten from Form.
        name: req.body.nameF,
        email: req.body.emailF,
        age: req.body.ageF,
        cellphone: req.body.cellphoneF,
        country: req.body.countryF,
        address: req.body.addressF,
        gender: req.body.genderF,
        identifier: req.body.identifierF //Means if it's student / teacher. Otherwise will be a Person.
    })
    console.log(req.body);
    person.save((err) => {
      if (err) res.status(500).send({message: `Error creating the user: ${err}`})
      return res.status(201).send({message: 'The user has been signed up successfully'})
     })
}

function updatePerson(req, res){

  persona.findOne({email : req.body.emailF}, (err, personUpdated) => { //Update by the parameter email. - Should've been done with findOneAndUpdate but couldn't deal with it.  
    if (err) res.status(500).send({message: `Error updating the user: ${err}`});
    if(req.body.nameF != undefined) personUpdated.name = req.body.nameF; //IFs to make sure there are data on the body.
    if(req.body.ageF != undefined) personUpdated.age = req.body.ageF;
    if(req.body.cellphoneF != undefined) personUpdated.cellphone = req.body.cellphoneF;
    if(req.body.countryF != undefined) personUpdated.country = req.body.countryF;
    if(req.body.addressF != undefined) personUpdated.address = req.body.addressF;
    if(req.body.genderF != undefined) personUpdated.gender = req.body.genderF;
    if(req.body.identifierF != undefined) personUpdated.identifier = req.body.identifierF;
    console.log(`El ageF es este ${req.body.ageF}`);
    console.log(`Estamos en este log ${personUpdated}`);
    personUpdated.save(function() {
      res.send("Actualizamos tus datos");
    });
  })
}

function deletePerson(req, res){ //delete for people

  persona.findOneAndRemove({email : req.body.emailF}, (err, personDeleted) => { //Deletes by the parameter email.  
    if(!err) res.send("Person deleted!");
    else res.send ("There was a mistake while deleting the register")
  })
}

function getAllStudent(req, res) {

  persona.find({identifier: 'student'}, (err, people) => { 
      res.status(200).send(people)  
  })
}














/*
function getByName(req, res){ // función para obtener un unico usuario apartir del nombre
	User.findOne({name : req.params.name}, function(err, doc) {
        res.send(doc);
  	});
};

function remove(req, res) { //función para eliminar un usuario
  User.findOneAndRemove({name: req.params.name}, function(err) {
    if(!err) {
        res.send("Usuario eliminado correctamente");
    } 
  });
};
*/

module.exports = { // Exporta todos los metodos
  getAllStudent,
  savePerson,
  updatePerson,
  getAll,
  deletePerson
};