var express = require('express');
var router = express.Router(); // express module for route managing.
//var fs = require("fs");  //filesystem


router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

var db = require('./queries.js'); 



//router.get('/users', db.getAll);  		//mediante un metodo get al url ...../users ser le ejecutara la funcion getALL
//router.get('/users/:name', db.getByName);  // proveniente de la clase queries y cuya instancia es la variable bd
router.post('/save', db.save);
//router.put('/update/:name', db.update);
//router.delete('/delete/:name', db.delete);

module.exports = router; //exporta todo lo que esta almacenado en router