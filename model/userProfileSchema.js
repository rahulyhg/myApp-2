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
        userProfile.find(function(err, res){
            console.log(err, res[0]);
            process.exit(1);
        });
    }
}());