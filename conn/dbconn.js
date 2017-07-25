//Import the mongoose module
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/myapp';
mongoose.connect(mongoDB);

//Get the default connection
var db = mongoose.connection;
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  // we're connected!
  //console.log("db connected");
});


module.exports.db = db;
module.exports.Schema = Schema;
module.exports.ObjectId = ObjectId;




