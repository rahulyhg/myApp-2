//Import the mongoose module
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var dbconn = require("../config/appConfig");

//Set up default mongoose connection
//var mongoDB = 'mongodb://127.0.0.1/myapp';

var mongoDB = dbconn.db.connectionString;
mongoose.connect(mongoDB, {useMongoClient: true});

//Get the default connection
var db = mongoose.connection;
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function(err) {

  if (err) {
    console.log('Error in connection', err);
  } else {
      // we're connected!
  console.log("db connected");
  }
});


module.exports.db = db;
module.exports.Schema = Schema;
module.exports.ObjectId = ObjectId;






