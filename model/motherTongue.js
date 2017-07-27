"use strict";

var conn = require('../conn/dbconn');

var motherTongueSchema = new conn.Schema({
    "name" : String,
    "shortName" : String
});

var mothertongues = conn.db.model('mothertongues', motherTongueSchema);

module.exports = mothertongues;


(function(){
	if(require.main === module){
		mothertongues.find(function(err, res){
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