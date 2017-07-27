"use strict";

var conn = require('../conn/dbconn');

var castesSchema = new conn.Schema({
    "religionID" : String,
    "name" : String,
    "shortName" : String
});

var castes = conn.db.model('castes', castesSchema);

module.exports = castes;


(function(){
	if(require.main === module){
		castes.find(function(err, res){
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