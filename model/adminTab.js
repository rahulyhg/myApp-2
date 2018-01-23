"use strict";

var conn = require('../conn/dbconn');

var adminSchema = new conn.Schema({
	"username" : String,
	"pass" : String,
	"role": String
});

var adminLogins = conn.db.model('adminTab', adminSchema);

module.exports = adminLogins;


(function(){
	if(require.main === module){
		adminLogins.find(function(err, res){
			console.log(err, res);
			process.exit(1);
		});
		
		// var updateQuery = {
		// 	username: "test@test.com",
		// };
		// var updateCondition = {
		// 	loginToken: ""
		// };
		// adminLogins.update(updateQuery, {"$set" : updateCondition}, function(err, res){
		// 	console.log(err, res);
		// 	process.exit(1);
		// });
	}
}());
