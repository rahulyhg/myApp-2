var express 		= require('express');
var router 			= express.Router();
var respohandler 	= require('./common/respoHandler');
var userProcess 	= require("./api/userApi");
var userAction 		= require("./api/userAction");
var preValidate 	= require("./common/validation");
var mailHandler 	= require("./common/mailHandler");
var auth 			= require("./common/auth");



/******************************** USER log in/out **********************************************/
//done
router.post('/login', respohandler.addLogToken, preValidate.userLoginValidate, userProcess.userLogin, auth.createAuthToken, respohandler.jsonResponse);

//done
router.post('/logout', respohandler.addLogToken, preValidate.userLogoutValidate, userProcess.userLogout, auth.deleteAuthToken, respohandler.jsonResponse);

/***************************** USER log registration/myProfile *********************************/
//done
router.post('/register', respohandler.addLogToken, preValidate.userRegisterValidate, userProcess.userRegister, mailHandler.sendVerifyMail, respohandler.jsonResponse);

//
router.post('/checkEmail', respohandler.addLogToken, userProcess.checkEmail, respohandler.jsonResponse);

//
router.post('/uploadFile', respohandler.addLogToken, userProcess.uploadFile, respohandler.jsonResponse);

//
router.post('/uploadPic', respohandler.addLogToken, userProcess.uploadPic, respohandler.jsonResponse);

router.get('/verifyEmail', respohandler.addLogToken, userProcess.verifyEmail, respohandler.jsonResponse);

//done
router.post('/action/updateProfile', respohandler.addLogToken, preValidate.userProfileValidate, userProcess.updateProfile, respohandler.jsonResponse);

//doing
router.post('/myProfile',respohandler.addLogToken, auth.validateAuthToken, userProcess.userProfile, respohandler.jsonResponse);

/******************************** USER ACTION ******************************/
router.post('/action/search', respohandler.addLogToken, auth.validateAuthToken, userAction.search, respohandler.jsonResponse);

router.post('/action/interest', respohandler.addLogToken, respohandler.priTokenValidate, userAction.sendInterest, respohandler.jsonResponse);

module.exports = router;
