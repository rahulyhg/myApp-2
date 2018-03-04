"use strict";

var conn = require('../conn/dbconn');

var userLoginsSchema = new conn.Schema({
	"username" : {type:String},
	// TODO - It needs to be unique
	// "username" : {type:String, unique: true},
	"pass" : String,
	"loginToken" : String,
	"createdOn" : String,
	"modifiedOn" : String,
	"isEnabled" : Number,
	"profId": String,
	"role": {type: String, enum: ['User', 'Admin', 'Sub-Admin'], default: 'User'}
});

var userLogins = conn.db.model('userlogins', userLoginsSchema);

module.exports = userLogins;


(function(){
	if(require.main === module){
		// userLogins.find(function(err, res){
		// 	console.log(err, res);
		// 	process.exit(1);
		// });
		
		// var updateQuery = {
		// 	username: "test@test.com",
		// };
		// var updateCondition = {
		// 	loginToken: ""
		// };
		// userLogins.update(updateQuery, {"$set" : updateCondition}, function(err, res){
		// 	console.log(err, res);
		// 	process.exit(1);
		// });
	}
}());
