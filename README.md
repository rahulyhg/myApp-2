# Project myapp

this project let you reqisted your profile and then after admin's approval lead you login. Also you can search profiles of your interest and connect to them. Private Organisation version 1.0.0

## Getting Started

The list of API's are give below to start working with 

### Prerequisites

browser
broadband

# Login 

## url -> http://codedep.in/users/login

### REQUEST
```
{
	"username":"test@test.com",
	"pass":"123"
}

```

### SUCCESSFUL RESPONSE - 200 OK

```
{
    "data": {
        "username": "test@test.com",
        "loginToken": "4361279910302854xj9xPD30BqO7i5PT",
        "isEnabled": 1,
        "profId": "5951f56cac9568c0138efe71"
    },
    "status": "success",
    "code": 200,
    "displayMsg": "no msg to display",
    "logId": "0474103097928710"
}

```

### VALIDATION ERROR RESPONSE - 500

```
[
    {
        "property": "instance.pass",
        "message": "does not meet minimum length of 1",
        "schema": {
            "type": "string",
            "minLength": 1
        },
        "name": "minLength",
        "argument": 1,
        "stack": "instance.pass does not meet minimum length of 1"
    }
]

```

### UN-REVIEWED PROFILE RESPONSE - 410

```

{
    "data": "NA",
    "status": "failed",
    "code": 410,
    "displayMsg": "your profile is under review, please contact admin",
    "logId": "4000103093348787"
}

```

### DE-ACTIVATED PROFILE RESPONSE - 420

```

{
    "data": "NA",
    "status": "failed",
    "code": 420,
    "displayMsg": "your profile is deactivated, please contact admin",
    "logId": "4436103008607090"
}

```

# Logout

## url -> http://codedep.in/users/logout

### REQUEST
```
{
    "username":"test@test.com",
    "loginToken": "4361279910302854xj9xPD30BqO7i5PT"
}

```

### SUCCESSFUL RESPONSE - 200 OK

```
{
    "data": {
        "loginToken": "4361279910302854xj9xPD30BqO7i5PT"
    },
    "status": "success",
    "code": 200,
    "displayMsg": "no msg to display",
    "logId": "2032103057362439"
}

```

### VALIDATION ERROR RESPONSE - 500

```
[
    {
        "property": "instance.loginToken",
        "message": "does not meet minimum length of 1",
        "schema": {
            "type": "string",
            "minLength": 1
        },
        "name": "minLength",
        "argument": 1,
        "stack": "instance.loginToken does not meet minimum length of 1"
    }
]

```

# myProfile

## url -> http://codedep.in/users/myProfile

### REQUEST
```
{
    "profId":"5951f56cac9568c0138efe71",
    "loginToken":"2148854017231311YJ9sP31A9wQXY2Tw"
}

```

### SUCCESSFUL RESPONSE - 200 OK

```
{
  "data": [
    {
      "_id": "5951f56cac9568c0138efe71",
      "userid": "",
      "visibleProfile": {
        "contact": true
      },
      "profileImage": "",
      "parnicYoga": {
        "arhaticLevel": "Preparatory level",
        "isTrainer": 1,
        "trainerLevel": "Basic",
        "prosperity": [
          "Kriyashakti"
        ],
        "spritual": [
          "Arthatic Yoga",
          "Inner Teachings of Hinduism Revealed"
        ],
        "healing": [
          "Basic Pranic Healing"
        ]
      },
      "desiredPartner": {
        "manglik": [
          "Non-manglik",
          "manglik"
        ],
        "vegiterian": 1,
        "smoke": 0,
        "drink": 1,
        "hroscoperMustMatch": 1,
        "annualIncomeMin": 100000,
        "annualIncomeMax": 500000,
        "horoscope": [
          
        ]
      },
      "contact": {
        "email": "guptamohit385@gmail.com",
        "phone_no": "",
        "mobile": "9958189530"
      },
      "lifeStyle": {
        "vegetarian": 1,
        "NonVegetarian": 1,
        "Egaetarian": 1,
        "smoke": 1,
        "smokeOcc": 1,
        "drink": 1,
        "drinkOcc": 0,
        "ownHouse": 1,
        "ownCar": 1,
        "cooking": 1,
        "about": "fun loving",
        "hobbies": [
          "traveling",
          "sports"
        ]
      },
      "horoscope": {
        "mustMatch": 1,
        "rashi": "",
        "nakshatra": "",
        "manglik": "NON Manglic"
      },
      "professional": {
        "about": "IT Professional",
        "orgName": "Wipro",
        "occupation": "Software Engineer",
        "currency": "Rupee",
        "annualIncome": "15 l.p.a - 20 l.p.a",
        "orgType": "Private"
      },
      "family": {
        "about": "simple fun loving",
        "familyStatus": "Upper Middle Class",
        "familyType": "Nuclear",
        "familyValues": "Traditional",
        "familyIncome": "10 LPA - 15 LPA",
        "fatherOccupation": "BANK MANAGER",
        "motherOccupation": "Home Maker",
        "brothers": 2,
        "sisters": 4
      },
      "education": {
        "hightestEdu": "PG",
        "PG": "MCA",
        "PGCollege": "ABES",
        "UG": "BCA",
        "UGCollege": "AGRA College"
      },
      "basic": {
        "firstName": "mohit",
        "middleName": "",
        "lastName": "gupta",
        "DOB": "13/11/1990",
        "TOB": "8:00 PM",
        "complex": "Fair",
        "disablity": "Normal",
        "gender": "Male",
        "aboutMe": "i am very smart",
        "height": "1.8",
        "weight": "68 kg",
        "maritialStatus": "Never Married",
        "belongsToCountry": "INDIA",
        "belongsToState": "DELHI",
        "belongsToCity": "DELHI",
        "currentToCountry": "INDIA",
        "currentToState": "KARNATAKA",
        "currentToCity": "BANGALORE",
        "profileManagedBy": "SELF",
        "religion": "Hindu",
        "cast": "Bania",
        "languageknown": [
          "Hindi",
          "English"
        ]
      },
      "profileStatus": {
        "certificatedUploaded": 1,
        "certificatedApproved": 0,
        "profileInSearch": 1,
        "imagesApproved": 0,
        "loginToken": ""
      }
    }
  ],
  "status": "success",
  "code": 200,
  "displayMsg": "no msg to display",
  "logId": "2591172331818089"
}
```

# updateProfile

## url -> http://codedep.in/users/action/updateProfile

### REQUEST
```
{
  "loginToken": "2148854017231311YJ9sP31A9wQXY2Tw",
  "profileID": "5951f56cac9568c0138efe71",
  "userid": "",
  "profileImage": "",
  "parnicYoga": {
    "arhaticLevel": "Preparatory level",
    "isTrainer": 1,
    "trainerLevel": "",
    "prosperity": [
      
    ],
    "spritual": [
      
    ],
    "healing": [
      
    ]
  },
  "desiredPartner": {
    "vegiterian": 0,
    "smoke": 0,
    "drink": 0,
    "hroscoperMustMatch": 0,
    "annualIncomeMin": 0,
    "annualIncomeMax": 0,
    "horoscope": [
      ""
    ]
  },
  "contact": {
    "email": "test@test1.com",
    "phone_no": "",
    "mobile": "9999999999"
  },
  "lifeStyle": {
    "vegetarian": 0,
    "NonVegetarian": 0,
    "Egaetarian": 0,
    "smoke": 0,
    "smokeOcc": 0,
    "drink": 0,
    "drinkOcc": 0,
    "ownHouse": 0,
    "ownCar": 0,
    "cooking": 0,
    "about": "",
    "hobbies": [
      
    ]
  },
  "horoscope": {
    "mustMatch": 0,
    "rashi": "",
    "nakshatra": "",
    "manglik": ""
  },
  "professional": {
    "about": "",
    "orgName": "",
    "occupation": "",
    "currency": "",
    "annualIncome": "",
    "orgType": ""
  },
  "family": {
    "about": "",
    "familyStatus": "",
    "familyType": "",
    "familyValues": "",
    "familyIncome": "",
    "fatherOccupation": "",
    "motherOccupation": "",
    "brothers": 0,
    "sisters": 0
  },
  "education": {
    "hightestEdu": "",
    "PG": "",
    "PGCollege": "",
    "UG": "",
    "UGCollege": ""
  },
  "basic": {
    "firstName": "best",
    "middleName": "",
    "lastName": "",
    "DOB": "13/11/1990",
    "TOB": "",
    "complex": "",
    "disablity": "",
    "gender": "male",
    "aboutMe": "",
    "height": "",
    "weight": "",
    "maritialStatus": "",
    "belongsToCountry": "INDIA",
    "belongsToState": "",
    "belongsToCity": "",
    "currentToCountry": "",
    "currentToState": "",
    "currentToCity": "",
    "profileManagedBy": "",
    "religion": "",
    "cast": "",
    "languageknown": [
      
    ]
  },
  "profileStatus": {
    "certificatedUploaded": 0,
    "certificatedApproved": 0,
    "profileInSearch": 0,
    "imagesApproved": 0,
    "loginToken": ""
  }
}

```

### SUCCESSFUL RESPONSE - 200 OK

```
{
    "status": "success",
    "code": 200,
    "displayMsg": "no msg to display",
    "logId": "0474103097928710"
}
```

# cities 

## url -> http://codedep.in/common/cities

### SUCCESSFUL RESPONSE - 200 OK

```
{
    "data": {
        "username": "test@test.com",
        "loginToken": "4361279910302854xj9xPD30BqO7i5PT",
        "isEnabled": 1,
        "profId": "5951f56cac9568c0138efe71"
    },
    "status": "success",
    "code": 200,
    "displayMsg": "no msg to display",
    "logId": "0474103097928710"
}

```

# states 

## url -> http://codedep.in/common/states

### SUCCESSFUL RESPONSE - 200 OK

```
{
    "data": [
        {
            "_id": "59785921fe63857fbe7d09f6",
            "countryId": "597858cdfe63857fbe7d09e4",
            "stateName": "KARNATAKA",
            "shortName": "KA"
        }
    ],
    "status": "success",
    "code": 200,
    "displayMsg": "no msg to display",
    "logId": "6141192199641277"
}

```

# countries 

## url -> http://codedep.in/common/countries

### SUCCESSFUL RESPONSE - 200 OK

```
{
    "data": [
        {
            "_id": "597858cdfe63857fbe7d09e4",
            "name": "INDIA",
            "shortName": "IN"
        }
    ],
    "status": "success",
    "code": 200,
    "displayMsg": "no msg to display",
    "logId": "2258192145862763"
}

```

# religions 

## url -> http://codedep.in/common/religions

### SUCCESSFUL RESPONSE - 200 OK

```
{
    "data": [
        {
            "_id": "59785a92fe63857fbe7d0a2f",
            "name": "HINDU",
            "shortName": "hindu"
        },
        {
            "_id": "59785a92fe63857fbe7d0a31",
            "name": "JAIN",
            "shortName": "jain"
        },
        {
            "_id": "59785a92fe63857fbe7d0a33",
            "name": "PUNJABI",
            "shortName": "punjabi"
        }
    ],
    "status": "success",
    "code": 200,
    "displayMsg": "no msg to display",
    "logId": "6123192109234670"
}

```

# castes 

## url -> http://codedep.in/common/castes

### SUCCESSFUL RESPONSE - 200 OK

```
{
    "data": [
        {
            "_id": "5979c61cfe63857fbe7d0ee1",
            "religionID": "59785a92fe63857fbe7d0a2f",
            "name": "Gupta",
            "shortName": "gupta"
        }
    ],
    "status": "success",
    "code": 200,
    "displayMsg": "no msg to display",
    "logId": "1206192133113286"
}

```

# mothertongues 

## url -> http://codedep.in/common/mothertongues

### SUCCESSFUL RESPONSE - 200 OK

```
{
    "data": [
        {
            "_id": "59785a31fe63857fbe7d0a20",
            "name": "HINDI-UP",
            "shortName": "hindi-up"
        },
        {
            "_id": "59785a31fe63857fbe7d0a22",
            "name": "KANADA",
            "shortName": "kanada"
        },
        {
            "_id": "59785a31fe63857fbe7d0a24",
            "name": "ENGLISH",
            "shortName": "english"
        }
    ],
    "status": "success",
    "code": 200,
    "displayMsg": "no msg to display",
    "logId": "5875192118581159"
}

```
