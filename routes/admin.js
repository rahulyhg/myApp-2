var express 		= require('express');
var respohandler 	= require('./common/respoHandler');
var preValidate 	= require("./common/validation");
var adminProcess = require("./api/adminApi");
var auth 	    	= require("./common/auth");
var mailHandler 	= require("./common/mailHandler");
var router 			= express.Router();

// TODO - Modify user schema to have role
// Add admin APIs

/******************************** USER log in/out **********************************************/
//done
router.post('/login', respohandler.addLogToken, preValidate.adminLoginValidate, 
										adminProcess.adminLogin, auth.createAuthToken, respohandler.jsonResponse);

//done
router.post('/logout', respohandler.addLogToken, preValidate.adminLogoutValidate, 
										adminProcess.adminLogout, auth.deleteAuthToken, respohandler.jsonResponse);

//done
router.post('/addnew', respohandler.addLogToken, preValidate.adminRegisterValidate, 
										adminProcess.adminRegister , respohandler.jsonResponse);

//done
// router.post('/getNewUsers', respohandler.addLogToken, preValidate.userRegisterValidate, 
// 										adminProcess.userRegister, respohandler.jsonResponse);

//working
// router.post('/getUpdateInfoUsers', respohandler.addLogToken, preValidate.userRegisterValidate, 
// 										adminProcess.userRegister, respohandler.jsonResponse);

//done
// router.post('/acceptDeclineUser', respohandler.addLogToken, preValidate.userRegisterValidate, 
// 										adminProcess.userRegister, respohandler.jsonResponse);

//done
// router.post('/acceptDeclineUpdate', respohandler.addLogToken, preValidate.userRegisterValidate, 
// 										adminProcess.userRegister, respohandler.jsonResponse);

//done
// router.post('/blockUser', respohandler.addLogToken, preValidate.userRegisterValidate, 
// 										adminProcess.userRegister, respohandler.jsonResponse);


// 1) accept user 
// 2) accept update in profile (or new) (not visible i search till accepted)
// 3) block/unblock by ID/name/email

module.exports = router;
