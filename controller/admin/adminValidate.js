"use strict";
var Validator = require('jsonschema').Validator;
var userObj = {};
var v = new Validator();

var loginSchema = {
  "properties": {
    "username"           : {"type": "string", "format":"email", "minLength":1},
    "pass"               : {"type": "string", "minLength":1}
  },
   "required": ["username", "pass"]
};

var adminRegsterSchema = {
  "properties": {
      "name"          : {"type": "string", "minLength":1},
      "username"      : {"type": "string", "format":"email", "minLength":1},
      "pass"          : {"type": "string", "minLength":3},
      "gender"        : {"type": "string", "minLength":1},
      "dob"           : {"type": "string", "minLength":9},
      "mothertounge"  : {"type": "string", "minLength":1},
      "mobile"        : {"type": "string", "minLength":9},
      "country"       : {"type": "string", "minLength":1}
    },
     "required": ["name", "username", "pass", "role"]  
};
  
var logoutSchema = {
  "properties": {
    "username"   : {"type": "string", "format":"email", "minLength":1},
    "loginToken" : {"type": "string", "minLength":1},
  },
    "required": ["loginToken"]
};

var acceptDeclineUserSchema = {
  "properties": {
    "username"   : {"type": "string", "format":"email", "minLength":1},
    "loginToken" : {"type": "string", "minLength":1},
  },
    "required": ["loginToken"]
};

/**
 * [loginValidate description]
 * @param  {[type]} params [description]
 * @param  {[type]} callb  [description]
 * @return {[type]}        [description]
 */
userObj.loginValidate = function(params, callb){
	var validRes = v.validate(params, loginSchema).errors;

	if (!validRes.length) {
		return callb();
	} else {
		return callb(validRes);
	}
};

/**
 * [logoutValidate description]
 * @param  {[type]} params [description]
 * @param  {[type]} callb  [description]
 * @return {[type]}        [description]
 */
userObj.logoutValidate = function(params, callb){
    var validRes = v.validate(params, logoutSchema).errors;

    if (!validRes.length) {
        return callb();
    } else {
        return callb(validRes);
    }
};

/**
 * [registrationValidate description]
 * @param  {[type]} params [description]
 * @param  {[type]} callb  [description]
 * @return {[type]}        [description]
 */
userObj.registrationValidate = function(params, callb){
	var validRes = v.validate(params, adminRegsterSchema).errors;

	if (!validRes.length) {
		return callb();
	} else {
		return callb(validRes);
	}
};

module.exports = userObj;
