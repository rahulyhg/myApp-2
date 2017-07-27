"use strict";

var conn = require('../conn/dbconn');

var statesSchema = new conn.Schema({
    "countryId" : String,
    "stateName" : String,
    "shortName" : String
});

var states = conn.db.model('states', statesSchema);

module.exports = states;


(function(){
	if(require.main === module){
		states.find(function(err, res){
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
