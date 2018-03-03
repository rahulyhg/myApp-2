"use strict";

//globals
var adminSchema = require("../../model/userSchema");
var Log = require("../../appUtil/logger");
var statics = require("../../appUtil/appStatic");
var debug = require("debug")("adminControl");
var utils = require("../../appUtil/commonUtil");
var userControl = require("../../controller/user/userControl");

//constants
var adminObj = {};
var componentName = "controller.admin.adminControl";

/**
 * Creates new admin user
 * 
 * @param {object} params - http request params
 * @param {function} callback - callback function
 * @returns {function}
 */
adminObj.createNewAdmin = (params, callback) => {
  let error = {};
  const {username, pass, role, logId} = params;

  const createAdminSchema = {
    username,
    pass,
    role,
    loginToken: '',
    createdOn: new Date(),
    modifiedOn: new Date(),
    isEnabled: 1
  };
  
  const admin = new adminSchema(createAdminSchema);

  admin.save((err, res) => {
    if(err){
      error.msg 		= statics.commonError.serverErr.displayMsg;
      error.status 	= statics.commonError.serverErr.status;
      error.code 		= statics.commonError.serverErr.code;
      error.logId 	= logId;
      error.err 		= err;

      Log.error(componentName, logId, err);
      return callback(error);
    }

    Log.info(componentName, logId, res);
    return callback(null, res);
  })
}

/**
 * Admin authentication request
 * 
 * @param {object} params - http request params
 * @param {function} callback - callback function
 * @returns {function}
 */
adminObj.login = (params, callback) => {
// Method from user control can drectly be used
return userControl.login(params, callback);
}

/**
 * Admin logout request
 * 
 * @param {object} params - http request params
 * @param {function} callback - callback function
 * @returns {function}
 */
adminObj.logout = (params, callback) => {
  // Method from user control can drectly be used
return userControl.logout(params, callback);
}

/**
 * Request to approve/diapprove new user
 * 
 * @param {object} params - http request params
 * @param {function} callback - callback function
 * @returns {function}
 */
adminObj.acceptDeclineUser = (params, callback) => {
  return callback();
}

/**
 * Request to approve/disapprove new user profile
 * 
 * @param {object} params - http request params
 * @param {function} callback - callback function
 * @returns {function}
 */
adminObj.acceptDeclineUserProfile = (params, callback) => {
  return callback();
}

/**
 * Request to approve/disapprove user profile updates
 * 
 * @param {object} params - http request params
 * @param {function} callback - callback function
 * @returns {function}
 */
adminObj.acceptDeclineUserProfileUpdate = (params, callback) => {
  return callback();
}

/**
 * Request to block/unblock user
 * 
 * @param {object} params - http request params
 * @param {function} callback - callback function
 * @returns {function}
 */
adminObj.blockUnblockUser = (params, callback) => {
  return callback();
}

module.exports = adminObj