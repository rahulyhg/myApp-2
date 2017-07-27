"use strict";

var conn = require('../conn/dbconn');

var religionSchema = new conn.Schema({
    "name" : String,
    "shortName" : String
});

var religions = conn.db.model('religions', religionSchema);

module.exports = religions;


(function(){
	if(require.main === module){
		religions.find(function(err, res){
			console.log(err, res);
			process.exit(1);
		});
		
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
