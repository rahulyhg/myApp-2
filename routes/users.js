var express = require('express');
var router = express.Router();
var respohandler = require('./common/respoHandler');
var userProcess = require("./api/userApi");
var userAction = require("./api/userAction");
var preValidate = require("./common/validation");
var auth = require("./common/auth");


/******************************** USER log in/out **********************************************/
//done
router.post('/login', respohandler.addLogToken, preValidate.userLoginValidate, userProcess.userLogin, auth.createAuthToken, respohandler.jsonResponse);

//done
router.post('/logout', respohandler.addLogToken, preValidate.userLogoutValidate, userProcess.userLogout, auth.deleteAuthToken, respohandler.jsonResponse);

/***************************** USER log registration/myProfile *********************************/

router.post('/registration', respohandler.addLogToken, preValidate.userRegisterValidate, userProcess.userRegister, respohandler.jsonResponse);

//doing
router.post('/myProfile',respohandler.addLogToken, auth.validateAuthToken, userProcess.userProfile, respohandler.jsonResponse);

/******************************** USER ACTION ******************************/
router.post('/action/search', respohandler.addLogToken, respohandler.priTokenValidate, userAction.search, respohandler.jsonResponse);

router.post('/action/interest', respohandler.addLogToken, respohandler.priTokenValidate, userAction.sendInterest, respohandler.jsonResponse);

module.exports = router;
