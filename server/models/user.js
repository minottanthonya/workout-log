// user model created using sequelize
// talks to the table user

module.exports = function(sequelize, DataTypes){
	return sequelize.define('user,' {
		username: Sequelize.STRING,
		passwordhas: Sequelize.STRING
	});
};