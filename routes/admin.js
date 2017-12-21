var express 		= require('express');
var respohandler 	= require('./common/respoHandler');
var preValidate 	= require("./common/validation");
var preValidate 	= require("./common/validation");
var auth 	    	= require("./common/auth");
var mailHandler 	= require("./common/mailHandler");
var router 			= express.Router();

/******************************** USER log in/out **********************************************/
//done
router.post('/admin/login', respohandler.addLogToken, preValidate.userLoginValidate, userProcess.userLogin, auth.createAuthToken, respohandler.jsonResponse);

//done
router.post('/admin/logout', respohandler.addLogToken, preValidate.userLogoutValidate, userProcess.userLogout, auth.deleteAuthToken, respohandler.jsonResponse);

//done
router.post('/registeradmin', respohandler.addLogToken, preValidate.userRegisterValidate, userProcess.userRegister, mailHandler.sendVerifyMail, respohandler.jsonResponse);

module.exports = router;
