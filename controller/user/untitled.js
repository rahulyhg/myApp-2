var x = {
    "userid"                    : {"type": "string", "minLength":1},
    "profileStatus" : {
        "certificatedUploaded"  : {"type": "Number"},
        "certificatedApproved"  : {"type": "Number"},
        "profileInSearch"       : {"type": "Number"},
        "imagesApproved"        : {"type": "Number"},
        "loginToken"            : {"type": "string", "minLength":6}
    },
    "basic" : {
        "firstName"         : {"type": "string", "minLength":1}
        "middleName"        : {"type": "string"},
        "lastName"          : {"type": "string", "minLength":1},
        "DOB"               : {"type": "string"}, //format
        "TOB"               : {"type": "string"}, //format
        "complex"           : {"type": "string"},
        "disablity"         : {"type": "string"},
        "gender"            : {"type": "string"},
        "aboutMe"           : {"type": "string"},
        "height"            : {"type": "Number"},
        "maritialStatus"    : {"type": "string"},
        "languageknown"     : [{"type": "string"}],
        "belongsToCountry"  : {"type": "string"},
        "belongsToState"    : {"type": "string"},
        "belongsToCity"     : {"type": "string"},
        "currentToCountry"  : {"type": "string"},
        "currentToState"    : {"type": "string"},
        "currentToCity"     : {"type": "string"},
        "profileManagedBy"  : {"type": "string"}
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
        "vegiterian"        : {"type": "Number"},
        "smoke"             : {"type": "Number"},
        "drink"             : {"type": "Number"},
        "ownHouse"          : {"type": "Number"},
        "ownCar"            : {"type": "Number"},
        "cooking"           : {"type": "Number"},
        "hobbies"           : [{"type": "string"],
        "about"             : {"type": "string", "minLength":10}
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
    }
};