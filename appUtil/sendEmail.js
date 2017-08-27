"use strict";

var config 			= require("../config/appConfig");
var helper 			= require('sendgrid').mail;
var sg 				= require('sendgrid')(config.sendgridKey);
var statics			= require("./appStatic");
var emailobj 		= {};

emailobj.sendEmail = function(params, callb){

	var fromEmail = new helper.Email(params.from);
	var toEmail = new helper.Email(params.to);
	var subject = params.subject || ' ';
	var content = new helper.Content('text/plain', ' ');

	// create maill object from helper
	var mail = new helper.Mail(fromEmail, subject, toEmail, content);

	// add templateID to mail object
	mail.setTemplateId(params.template_id || " ");

	// substitions data in template
	if(params.substitution){

		var arr = Object.keys(params.substitution);

		arr.forEach(function(item){

			mail.personalizations[0].addSubstitution(
				new helper.Substitution('%' + item + '%', params.substitution[item]));
		});
	}

	var request = sg.emptyRequest({
	  method: 'POST',
	  path: '/v3/mail/send',
	  body: mail.toJSON()
	});

	sg.API(request, function (error, response) {
	  if (error) {
	    console.log('Error response received');
	    return callb(error);

	  }
	  
	  if (response.statusCode == 202) {
	    console.log(response.statusCode);
		return callb(null, "success");
	  }
	});
};

module.exports = emailobj;

// var token = "";

// var params = {
// 	from: "guptamohit385@gmail.com",
// 	to: "guptamohit385@gmail.com",
// 	template_id: statics.emailTamplateKey.verify,
// 	substitution: {
// 		link: "www.codedep.com/verifyEmail?token=" + token
// 	}
// };

// emailobj.sendEmail(params, function(err, result){
// 	console.log(err, result);
// })