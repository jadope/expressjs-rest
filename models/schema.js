var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var url = "mongodb://jadope:123@ds251598.mlab.com:51598/express-crud-ingweb";
//mongoose.connect(db); //Connection to DB. User: jadope, contraseña: 123

var moon = mongoose.connect(url);

var personSchema = new Schema ({
    name: {type: String},
    email: {type: String, unique: true, lowercase: true},
/*    created: {type: Date, default: Date.now},
    age: {type: Number},
    cellphone: {type: Number},
    country: {type: String, default: ''},
    address: {type: String, default: ''},
    gender: {type: String, enum: ['Male','Female','Undefined']}, */
    identifier: {type: String}
  })

  

  module.exports = mongoose.model('persona', personSchema);