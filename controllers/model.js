var schemas = require('./schema.js');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var people_schema = new Schema(schemas.person);

var people = mongoose.model("People", people_schema)


function getPeople(){
    return people;
}

module.exports = {
    getPeople : getPeople
}
