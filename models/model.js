var schemas = require('./schemas.js');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var people_schema = new Schema(schema.getPersonSchema);

var people = mongoose.model("People", people_schema)

function getPeople(){
    return people;
}

module.exports = {
    getPeople : getPeople
}
