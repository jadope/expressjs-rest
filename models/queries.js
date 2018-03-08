//This is for the database

var models = require('./model.js');
var schema = require('./schema.js');
var mod = models.getPeople(); //gets it from model


function save(req, res) { //función para guardar un usuario
    var person = new mod({person_id : req.body.person_id, person_name: req.body.person_name, type_person: req.body.type_person});
  
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
};

module.exports = { // Exporta todos los metodos
	getAll: getAll,
  getByName: getByName,
  save: save,
  delete: remove,
  update: update
};

