var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sequelize = require('./db.js');
var User = sequelize.import('./models/user.js');


//creates the table in postgres
//matches the model we defined
//Doesn't drop the db
User.sync(); // User({ force: true }); //drops the table compeletly (line 27ish)

// The app starts!
app.use(bodyParser.json());

app.use(require('./middleware/headers'));

app.use('/api/user', require('./routes/user'));

//login route
app.use('/api/login', require('./routes/session'));

app.use('/api/test', function(req, res){
	res.send("Hello World");
});

app.listen(3000, function(){
	console.log("app is listening on port 3000");
});

