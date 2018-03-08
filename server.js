const express = require('express'); // call express
const app = express(); // define our application using express
const bodyParser = require('body-parser');  //Gets the parameters from the body. 
const mongoose = require('mongoose'); //Our ORM. 
mongoose.connect('mongodb://jadope:123@ds157818.mlab.com:57818/express-crud-ingweb'); //Connection to DB. User: jadope, contraseña: 123

app.use(bodyParser.urlencoded({ extended: true })); //this will let us get the info from a POST.
app.use(bodyParser.json());

var port = process.env.PORT || 420; // set our port

var router = express.Router(); // get an instance of the express Router

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});




app.listen(port); //Start the sv.
console.log('Magic happens on port ' + port);