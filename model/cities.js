"use strict";

var conn = require('../conn/dbconn');

var citiesSchema = new conn.Schema({
    "countryID" : String,
    "stateID" : String,
    "cityName" : String,
    "shortName" : String
});

var cities = conn.db.model('cities', citiesSchema);

module.exports = cities;


(function(){
	if(require.main === module){
		cities.find(function(err, res){
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
