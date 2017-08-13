var x = {
    "userid"      : {"type": "string", "minLength":1},
    "profileStatus" : {
        "certificatedUploaded"  : {"type": "Number"},
        "certificatedApproved"  : {"type": "Number"},
        "profileInSearch"       : {"type": "Number"},
        "imagesApproved"        : {"type": "Number"},
        "loginToken"            : {"type": "string", "minLength":6}
    },
    "basic" : {
        "firstName"         : {"type": "string"},
        "middleName"        : {"type": "string"},
        "lastName"          : {"type": "string"},
        "DOB"               : {"type": "string"},
        "TOB"               : {"type": "string"},
        "complex"           : {"type": "string"},
        "disablity"         : {"type": "string"},
        "gender"            : {"type": "string"},
        "aboutMe"           : {"type": "string"},
        "height"            : {"type": "string"},
        "weight"            : {"type": "string"},
        "maritialStatus"    : {"type": "string"},
        "languageknown"     : {"type": "Object"},
        "belongsToCountry"  : {"type": "string"},
        "belongsToState"    : {"type": "string"},
        "belongsToCity"     : {"type": "string"},
        "currentToCountry"  : {"type": "string"},
        "currentToState"    : {"type": "string"},
        "currentToCity"     : {"type": "string"},
        "profileManagedBy"  : {"type": "string"},
        "religion"          : {"type": "string"},
        "cast"              : {"type": "string"},
    },
    "education" : {
        "hightestEdu"       : {"type": "string"},
        "PG"                : {"type": "string"},
        "PGCollege"         : {"type": "string"},
        "UG"                : {"type": "string"},
        "UGCollege"         : {"type": "string"}
    },
    "family" : {
        "about"             : {"type": "string", "minLength":10},
        "familyStatus"      : {"type": "string"},
        "familyType"        : {"type": "string"},
        "familyIncome"      : {"type": "string"},
        "fatherOccupation"  : {"type": "string"},
        "motherOccupation"  : {"type": "string"},
        "brothers"          : {"type": "Number"},
        "sisters"           : {"type": "Number"}
    },
    "professional" : {
        "about"             : {"type": "string", "minLength":1},
        "orgName"           : {"type": "string", "minLength":1},
        "occupation"        : {"type": "string", "minLength":1},
        "annualIncome"      : {"type": "Number"},
        "orgType"           : {"type": "string", "minLength":1}
    },
    "horoscope" : {
        "mustMatch"         : {"type": "Number"},
        "rashi"             : {"type": "string"},
        "nakshatra"         : {"type": "string"},
        "manglik"           : {"type": "string"}
    },
    "lifeStyle" : {
        "vegetarian"        : {"type": "Number"},
        "NonVegetarian"     : {"type": "Number"},
        "Egaetarian"        : {"type": "Number"},
        "smoke"             : {"type": "Number"},
        "smokeOcc"          : {"type": "Number"},
        "drink"             : {"type": "Number"},
        "drinkOcc"          : {"type": "Number"},
        "ownHouse"          : {"type": "Number"},
        "ownCar"            : {"type": "Number"},
        "cooking"           : {"type": "Number"},
        "hobbies"           : {"type": "Object"},
        "about"             : {"type": "Number"},
    },
    "contact" : {
        "email"             : {"type": "string"}, //format
        "phone_no"          : {"type": "string"},
        "mobile"            : {"type": "string"}
    },
    "desiredPartner" : {
        "horoscope"         : [{"type": "string"],
        "vegiterian"        : {"type": "Number"},
        "smoke"             : {"type": "Number"},
        "drink"             : {"type": "Number"},
        "hroscoperMustMatch" : {"type": "Number"},
        "annualIncomeMin"   : {"type": "Number"},
        "annualIncomeMax"   : {"type": "Number"}
    },
    "visibleProfile" : {
        "contact": {"type": "Boolean"}
    }, 
    "parnicYoga" : {
        "arhaticLevel"      : {"type": "string"},
        "isTrainer"         : {"type": "Number"},
        "trainerLevel"      : {"type": "string"},
        "healing"           : {"type": "Object"},
        "spritual"          : {"type": "Object"},
        "prosperity"        : {"type": "Object"}
    },
    "profileImage" : {"type": "string"}
};