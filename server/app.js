
var express = require('express');
var bodyParser = require('body-parser');
	// create the table in postgres
	// matches the model we defined
	// Doesn't drop the db
	User.sync();
	// User.sync({force:true});
	app.use(bodyParser.json());
	app.post('/api/user', function(req,res){
		var username = req.body.user.username;
		var pass = req.nody.user.password;
		// Need to create a user object and use sequelize to put that 
		// user in our database
		User.create({
			username: username,
			passwordhash: ""
		}).then(
				// Sequellize is going to return the object it created from db.

				function createSuccess(user){
					res.json({
						user: user,
						message: 'create'
					});
				},
				function createError(err){
					res,send(500, err.message);
				}
			);
	});
var app = express();

app.use(require('./middleware/headers'));

app.use('/api/test', function(req, res){
	res.send("Hello World");
});


app.listen(3000, function(){
	console.log("app is listening on 3000");
});


var Sequelize = require('sequelize');
var sequelize = new Sequelize('workoutlog', 'postgres', 'Tigersrock21', {
	host: 'localhost',
	dialect: 'postgres'
});

sequelize.authenticate().then(
	function(){
		console.log('connected to workoutlog postrgres db');
	},
	function(err){
		console.log(err);
	}
);

// build a user model is sqllize
	var User = sequelize.define('user', {
		username: Sequelize.STRING,
		passwordhas: Sequelize.STRING,
	});