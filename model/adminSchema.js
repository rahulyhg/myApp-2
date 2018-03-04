"use strict";

var conn = require('../conn/dbconn');

var adminSchema = new conn.Schema({
	username: {type: String, unique: true},
  pass : String,
  firstname: String,
  lastname: String,
	role: {type: String, enum: ['Admin', 'Sub-Admin'], default: 'Sub-Admin'}
});

var adminLogins = conn.db.model('adminsSchema', adminSchema);

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
