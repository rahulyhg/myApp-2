"use strict";

var conn = require('../conn/dbconn');

var userProfileSchema = new conn.Schema(
{
    "userid" : String,
    "profileStatus" : {
        "certificatedUploaded" : Number,
        "certificatedApproved" : Number,
        "profileInSearch" : Number,
        "imagesApproved" : Number,
        'isBlocked': {type: Boolean, default: false}, 
        "loginToken" : String
    },
    "basic" : {
        "firstName" : String,
        "middleName" : String,
        "lastName" : String,
        "DOB" : String,
        "TOB" : String,
        "complex" : String,
        "disablity" : String,
        "gender" : String,
        "aboutMe" : String,
        "height" : String,
        "weight": String,
        "maritialStatus" : String,
        "languageknown" : [String],
        "belongsToCountry" : String,
        "belongsToState" : String,
        "belongsToCity" : String,
        "currentToCountry" : String,
        "currentToState" : String,
        "currentToCity" : String,
        "profileManagedBy" : String,
        "religion": String,
        "cast" : String
    },
    "education" : {
        "hightestEdu" : String,
        "PG" : String,
        "PGCollege" : String,
        "UG" : String,
        "UGCollege" : String
    },
    "family" : {
        "about" : String,
        "familyStatus" : String,
        "familyType" : String,
        "familyValues": String,
        "familyIncome" : String,
        "fatherOccupation" : String,
        "motherOccupation" : String,
        "brothers" : Number,
        "sisters" : Number
    },
    "professional" : {
        "about" : String,
        "orgName" : String,
        "occupation" : String,
        "currency": String,
        "annualIncome" : String,
        "orgType" : String
    },
    "horoscope" : {
        "mustMatch" : Number,
        "rashi" : String,
        "nakshatra" : String,
        "manglik" : String
    },
    "lifeStyle" : {
        "vegetarian" : Number,
        "NonVegetarian": Number,
        "Egaetarian": Number,
        "smoke" : Number,
        "smokeOcc" : Number,
        "drink" : Number,
        "drinkOcc" : Number,
        "ownHouse" : Number,
        "ownCar" : Number,
        "cooking" : Number,
        "hobbies" : [String],
        "about" : String
    },
    "contact" : {
        "email" : String,
        "phone_no" : String,
        "mobile" : String
    },
    "desiredPartner" : {
        "horoscope" : [String],
        "vegiterian" : Number,
        "smoke" : Number,
        "drink" : Number,
        "hroscoperMustMatch" : Number,
        "annualIncomeMin" : Number,
        "annualIncomeMax" : Number
    },
    "visibleProfile" : {},
    "parnicYoga" : {
        "arhaticLevel" : String,
        "isTrainer" : Number,
        "trainerLevel" : String,
        "healing" : [ 
            String
        ],
        "spritual" : [ 
            String
        ],
        "prosperity" : [ 
            String
        ]
    },
     "profileImage" : String
});

var userProfile = conn.db.model('userprofiles', userProfileSchema);

module.exports = userProfile;

(function(){
    if(require.main === module){
        var createProfileSchema = {
        "userid" : "AM123",
        "profileStatus" : {
            "certificatedUploaded" : 0,
            "certificatedApproved" : 0,
            "profileInSearch" : 0,
            "imagesApproved" : 0,
            "loginToken" : ""
        },
        "basic" : {
            "firstName" : "test",
            "middleName" : "",
            "lastName" : "",
            "DOB" : "13/11/1990",
            "TOB" : "",
            "complex" : "",
            "disablity" : "",
            "gender" : "male",
            "aboutMe" : "",
            "height" : "",
            "weight": "",
            "maritialStatus" : "",
            "languageknown" : [],
            "belongsToCountry" : "INDIA",
            "belongsToState" : "",
            "belongsToCity" : "",
            "currentToCountry" : "",
            "currentToState" : "",
            "currentToCity" : "",
            "profileManagedBy" : "",
            "religion": "",
            "cast" : ""
        },
        "education" : {
            "hightestEdu" : "",
            "PG" : "",
            "PGCollege" : "",
            "UG" : "",
            "UGCollege" : ""
        },
        "family" : {
            "about" : "",
            "familyStatus" : "",
            "familyType" : "",
            "familyValues": "",
            "familyIncome" : "",
            "fatherOccupation" : "",
            "motherOccupation" : "",
            "brothers" : 0,
            "sisters" : 0
        },
        "professional" : {
            "about" : "",
            "orgName" : "",
            "occupation" : "",
            "currency": "",
            "annualIncome" : "",
            "orgType" : ""
        },
        "horoscope" : {
            "mustMatch" : 0,
            "rashi" : "",
            "nakshatra" : "",
            "manglik" : ""
        },
        "lifeStyle" : {
            "vegetarian" : 0,
            "NonVegetarian": 0,
            "Egaetarian": 0,
            "smoke" : 0,
            "smokeOcc" : 0,
            "drink" : 0,
            "drinkOcc" : 0,
            "ownHouse" : 0,
            "ownCar" : 0,
            "cooking" : 0,
            "hobbies" : [],
            "about" : ""
        },
        "contact" : {
            "email" : "test@test.com",
            "phone_no" : "",
            "mobile" : "9999999999"
        },
        "desiredPartner" : {
            "horoscope" : [""],
            "vegiterian" : 0,
            "smoke" : 0,
            "drink" : 0,
            "hroscoperMustMatch" : 0,
            "annualIncomeMin" : 0,
            "annualIncomeMax" : 0
        },
        "visibleProfile" : {},
        "parnicYoga" : {
            "arhaticLevel" : "",
            "isTrainer" : 0,
            "trainerLevel" : "",
            "healing" : [
            ],
            "spritual" : [ 
            ],
            "prosperity" : [
            ]
        },
         "profileImage" : ""
    };
        userProfile.update({"_id": "5951f56cac9568c0138efe71"}, {"$set": createProfileSchema}, function(err, res){
            console.log(err, res[0]);
            process.exit(1);
        });
    }
}());