"use strict";

var conn = require('../conn/dbconn');

var countriesSchema = new conn.Schema({
    "name" : String,
    "shortName" : String
});

var countries = conn.db.model('countries', countriesSchema);

module.exports = countries;


(function(){
	if(require.main === module){
		// countries.find(function(err, res){
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
