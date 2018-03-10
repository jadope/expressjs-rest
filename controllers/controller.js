//This is for the database

var persona = require('../models/schema');
//var schema = require('./schema.js');
//var mod = models.getPeople(); //gets it from model


function getAllStudent(req, res) {
    persona.find({}, function(err, people){ //{identifier: 'alumno'}
        res.status(200).send(people)  
    })
}

function savePerson(req, res) {
    var person = new persona ({ //F at the end, means that it's gotten from Form.
        name: req.body.nameF,
        email: req.body.emailF,
        /*age: req.body.ageF,
        cellphone: req.body.cellphoneF,*/ 
        identifier: req.body.identifierF
    })
    console.log(req.body);
    person.save((err) => {
      if (err) res.status(500).send({message: `Error creating the user: ${err}`})
      return res.status(201).send({message: 'The user has been signed up successfully'})
     })
}

function updatePerson(req, res){
 // if (req.body.)
  /*var person = new persona ({
    name: req.body.nameF,
    identifier: req.body.identifierF,
    email: req.body.email
  })*/
  console.log("Before findOneAndUpdate");
  
  persona.findOne({email: req.body.email}, function (err, personUpdated){
    if (err) res.status(500).send({message: `Error creating the user: ${err}`});
   // else{
     personUpdated.name = req.body.nameF;
     personUpdated.identifier = req.body.identifierF;
      console.log(`Estamos en este log ${personUpdated}`);
      personUpdated.save(function() {
        res.send("Actualizamos tus datos");
});
      
   // }
  })
}









/*function save(req, res) { //POST Person
  var person = new mod(    person_id: req.body.person_id,  _id: true, autoIndex: true },
    person_name: String,
    type_person: String,
    person_age: Number,
    person_cellphone: Number,
    person_address: String,
    registration: date.now()   
  {person_id : req.body.person_id, person_name: req.body.person_name, type_person: req.body.type_person});
  
    person.save(function() {
      res.send("Guardamos tus datos");
    });
  };

function getAll(req, res){ // función para obtener todos los usuarios
	User.find(function(err, doc) {
        res.send(doc);
  	});
};

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

function update(req, res) { //función para actualizar un usuario. Actualiza su username
  User.findOne({name : req.params.name}, function(err, user) {
        if (err) return handleError(err);
        user.pass = 'otherUsername';
        user.save(function() {
          res.send("Actualizamos tus datos");
        });
  	});
};*/

module.exports = { // Exporta todos los metodos
  getAllStudent,
  savePerson,
  updatePerson
};