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

# search

## url -> http://codedep.in/users/action/search

### REQUEST
```
{
  "loginToken": "2148854017231311YJ9sP31A9wQXY2Tw",
  "gender": "Male",
  "minAge": "21",
  "maxAge": "22",
  "minHeight": "4.03",
  "maxHeight": "4.03",
  "martialStatus": "Any",
  "eatingHabits": ""
}

```

### SUCCESSFUL RESPONSE - 200 OK

```
{
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
                "horoscope": []
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
        },
        {
            "_id": "599003e99645041d8a6a8665",
            "userid": "AM51Mn",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "ram@test.com",
                "phone_no": "",
                "mobile": "999999999"
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
                "hobbies": []
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
                "firstName": "ram",
                "middleName": "",
                "lastName": "",
                "DOB": "16/10/1980",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "Male",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5990ac0b3c7dbc1e75ad8cc9",
            "userid": "AM716s",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "she@test.com",
                "phone_no": "",
                "mobile": "9898989899"
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
                "hobbies": []
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
                "firstName": "she",
                "middleName": "",
                "lastName": "",
                "DOB": "01/24/1901",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "Female",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "India",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5992f90ca8b0462918bf52e4",
            "userid": "AM31rw",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "riya@gmail.com",
                "phone_no": "",
                "mobile": "9898989899"
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
                "hobbies": []
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
                "firstName": "riya singh",
                "middleName": "",
                "lastName": "",
                "DOB": "05/23/1990",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "Female",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "India",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "59944c34a8b0462918bf52e6",
            "userid": "AM61kp",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "abc@gmail.com",
                "phone_no": "",
                "mobile": "9989898998"
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
                "hobbies": []
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
                "firstName": "abc",
                "middleName": "",
                "lastName": "",
                "DOB": "01/01/1984",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "Male",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "Nepal",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "59951092a8b0462918bf52e8",
            "userid": "AM714V",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "ram@gmail.com",
                "phone_no": "",
                "mobile": "99999999999"
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
                "hobbies": []
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
                "firstName": "ram",
                "middleName": "",
                "lastName": "",
                "DOB": "01/03/1901",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "Female",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "Nepal",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "59a3012ca8b0462918bf52ea",
            "userid": "AM012q",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "ram1@test.com",
                "phone_no": "",
                "mobile": "999999999"
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
                "hobbies": []
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
                "firstName": "ram",
                "middleName": "",
                "lastName": "",
                "DOB": "16/10/1980",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "male",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "59a31e76a8b0462918bf52ec",
            "userid": "AM61eY",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "guptamohit385@gmail.com",
                "phone_no": "",
                "mobile": "999999999"
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
                "hobbies": []
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
                "firstName": "ram",
                "middleName": "",
                "lastName": "",
                "DOB": "16/10/1980",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "male",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "59a31f0429b30e33ad6fab4b",
            "userid": "AM21xd",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "guptamohit385@gmail.com",
                "phone_no": "",
                "mobile": "999999999"
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
                "hobbies": []
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
                "firstName": "ram",
                "middleName": "",
                "lastName": "",
                "DOB": "16/10/1980",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "male",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a12cc201934a96b4834b007",
            "userid": "AM91G1",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "test@gmail.com",
                "phone_no": "",
                "mobile": "7654321234"
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
                "hobbies": []
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
                "firstName": "Tanmay Das",
                "middleName": "",
                "lastName": "",
                "DOB": "01/01/1901",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "Male",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "India",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a12cc6c1934a96b4834b009",
            "userid": "AM51xV",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "test@gmail.com",
                "phone_no": "",
                "mobile": "987654321"
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
                "hobbies": []
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
                "firstName": "Tanmay Das",
                "middleName": "",
                "lastName": "",
                "DOB": "01/01/1901",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "Male",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "India",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a12cd121934a96b4834b00b",
            "userid": "AM01Wu",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "test@gmail.com",
                "phone_no": "",
                "mobile": "987654321"
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
                "hobbies": []
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
                "firstName": "Tanmay Das",
                "middleName": "",
                "lastName": "",
                "DOB": "01/03/1901",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "Male",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "India",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a12d0311934a96b4834b00d",
            "userid": "AM518M",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "pankajmckv4th@gmail.com",
                "phone_no": "",
                "mobile": "9051442686"
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
                "hobbies": []
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
                "firstName": "Pankaj",
                "middleName": "",
                "lastName": "",
                "DOB": "01/02/1901",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "Male",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "India",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a12dd131934a96b4834b00f",
            "userid": "AM51Jc",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "test@gmail.com",
                "phone_no": "",
                "mobile": "9876554333"
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
                "hobbies": []
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
                "firstName": "Tanmay Das",
                "middleName": "",
                "lastName": "",
                "DOB": "01/01/1901",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "Male",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "India",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a13e3b11934a96b4834b011",
            "userid": "AM618A",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "sagar110793@gmail.com",
                "phone_no": "",
                "mobile": "9876543218"
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
                "hobbies": []
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
                "firstName": "Sagar",
                "middleName": "",
                "lastName": "",
                "DOB": "01/02/1901",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "Male",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "India",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a143d5b1934a96b4834b013",
            "userid": "AM61t3",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "test1@test.com",
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
                "hobbies": []
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
                "firstName": "Ram",
                "middleName": "",
                "lastName": "",
                "DOB": "01/05/1901",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "Female",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "Myanmaar",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a1d43461934a96b4834b015",
            "userid": "AM61wB",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "sagar110793@gmail.com",
                "phone_no": "",
                "mobile": "8981669998"
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
                "hobbies": []
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
                "firstName": "Sagar",
                "middleName": "",
                "lastName": "",
                "DOB": "07/11/1993",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "Male",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "India",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2125a61934a96b4834b017",
            "userid": "AM1133",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "tester@gmail.com",
                "phone_no": "",
                "mobile": "8765432123"
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
                "hobbies": []
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
                "firstName": "Tester",
                "middleName": "",
                "lastName": "",
                "DOB": "01/27/2017",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "Male",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "India",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a21360a1934a96b4834b019",
            "userid": "AM61vf",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "tester@gmail.com",
                "phone_no": "",
                "mobile": "6543212345"
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
                "hobbies": []
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
                "firstName": "Tester",
                "middleName": "",
                "lastName": "",
                "DOB": "01/12/2017",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "Male",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "India",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a213ded1934a96b4834b01b",
            "userid": "AM910B",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "tester@gmail.com",
                "phone_no": "",
                "mobile": "9876543212"
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
                "hobbies": []
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
                "firstName": "Tester",
                "middleName": "",
                "lastName": "",
                "DOB": "01/12/2017",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "Male",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "Other",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a213f131934a96b4834b01d",
            "userid": "AM21Ms",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "tester@gmail.com",
                "phone_no": "",
                "mobile": "8877665544"
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
                "hobbies": []
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
                "firstName": "Tester",
                "middleName": "",
                "lastName": "",
                "DOB": "01/12/2017",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "Male",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "India",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a26db871934a96b4834b01f",
            "userid": "AM418X",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "ram@gmail.com",
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
                "hobbies": []
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
                "firstName": "ram",
                "middleName": "",
                "lastName": "",
                "DOB": "02/07/2000",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "Male",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "Nepal",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a26dbe11934a96b4834b021",
            "userid": "AM61y1",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "ramkrishna.ph@gmail.com",
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
                "hobbies": []
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
                "firstName": "ram",
                "middleName": "",
                "lastName": "",
                "DOB": "05/10/2017",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "Male",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "abc",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a27e1ca1934a96b4834b023",
            "userid": "AM0159",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "pranicvishval@gmail.com",
                "phone_no": "",
                "mobile": "9130431555"
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
                "hobbies": []
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
                "firstName": "Vishval Appaso Potdar",
                "middleName": "",
                "lastName": "",
                "DOB": "28-08-1985",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "Male",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "India",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a27ece91934a96b4834b025",
            "userid": "AM114k",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "rama@gmail.com",
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
                "hobbies": []
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
                "firstName": "ram",
                "middleName": "",
                "lastName": "",
                "DOB": "06/02/2017",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "Male",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "Bangladesh",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2cb57a100227e3ac9dd431",
            "userid": "AM31Ez",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "singh1122",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2cb7a63c4da7e3fcb73a75",
            "userid": "AM71O3",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "singh1122222",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2cb83ef914abe424f9b00c",
            "userid": "AM31TF",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "singh11222221",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2cb8c8c6775ae44b7df9b8",
            "userid": "AM51tG",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "singh112222222",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2cb8f61e3765e4545c762d",
            "userid": "AM21Mt",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "singh112222",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2cb9b61277fee47a2e9a0e",
            "userid": "AM31Ur",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "singh1122222",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2cbcf0a6f56ee4e94af1b2",
            "userid": "AM81ts",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "singh12222",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2cbe54484a5ee53ac5f3a7",
            "userid": "AM51Yq",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "ghchggch",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2cc20b484a5ee53ac5f3a9",
            "userid": "AM51zN",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "ghchgg",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2cc239487aeae59cbd1a20",
            "userid": "AM71W5",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "ghjjijijhgg",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2cc2cb72e3c5e5bff8ce85",
            "userid": "AM615b",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "jhgg",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2cc40ccf38b2e5e25fadce",
            "userid": "AM61YO",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "jhggwdq",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2cc468acaca5e5f230a8ae",
            "userid": "AM71Uy",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "jhggwdqwerewrw",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2cc621916e44e619819d3b",
            "userid": "AM517R",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "jhggwrewrw",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2cc8dc2e302be63fa04597",
            "userid": "AM31HS",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "jhgrewrw",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2cc90dd06debe65407150d",
            "userid": "AM31L3",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "jrewrw",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2ccaab409911e690c3084d",
            "userid": "AM81oh",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "jrewrw",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2ccaf1ac8bade69cd0868c",
            "userid": "AM41H1",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "jrewrw",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2ccb1d0f5aade69e4819ed",
            "userid": "AM21S8",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "jrewrw",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2ccb4f578c40e6c1a1eb6d",
            "userid": "AM51qF",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "jrw",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2ccb8151a93fe6ca791f65",
            "userid": "AM41Gl",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "jrw",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2ccead6420cee70bacbd6d",
            "userid": "AM21Xx",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "jrwrwre",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2ccef98e9893e71b845e42",
            "userid": "AM01kY",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "wre",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2ccf4f2bf2e2e724c92e4b",
            "userid": "AM41a1",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "wrejgfj",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2ccf72ecf1f5e742f2f1df",
            "userid": "AM01s6",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "wrejfwgfj",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2cd371157984e79f7dacf4",
            "userid": "AM816i",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "wrejfwgrerfj",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2cd42c729776e7c904ca94",
            "userid": "AM71Pz",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "wrejfwgrerfj",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2cd4624e1a93e7d293e513",
            "userid": "AM91DQ",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "wrejfwgdadadrerfj",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2cd4f1ddc5e9e7f07a6511",
            "userid": "AM916V",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "wrejfwgrerfj",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2cd509437b0ae7f9d256a0",
            "userid": "AM71iz",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "wrdqwdejfwgrerfj",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2cda77ebb479e895f4f341",
            "userid": "AM910P",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "wrdqwdejfadaswgrerfj",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2cdb70292977e8c9c49e44",
            "userid": "AM312U",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "wrdqwdejfaanoopdaswgrerfj",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2cdc203b6e14e8e0f84df4",
            "userid": "AM11NN",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "aanoopdaswgrerfj",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2cdf07dbaa7be94d146183",
            "userid": "AM91e8",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "aanoopdaswgrerfjnd",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2cfea6dbaa7be94d146185",
            "userid": "AM616P",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "aanoopdahjhswgrerfjnd",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2d0094445ff1ea37c00d59",
            "userid": "AM8152",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "aanoopdahjhswdegrerfjnd",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2d013c021ebaea58c704ce",
            "userid": "AM911b",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "aanoopdahjh434swdegrerfjnd",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2d03dd021ebaea58c704d0",
            "userid": "AM51wk",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "a434swdegrerfjnd",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2d0441215038ea9532e775",
            "userid": "AM71he",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "434swdegrerfjnd",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2d05fae6379eeab62781e7",
            "userid": "AM61I5",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "4grerfjnd",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2d066f02763beacd45f85b",
            "userid": "AM0133",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "4gre424rfjnd",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2d07214c879ceaf395f9ce",
            "userid": "AM71Ch",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "4gre424rjbfjnd",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2d083fb8f03ceb1ebc5457",
            "userid": "AM11c5",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "4gre424fererfrjbfjnd",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2d08fa8e661aeb3a159b65",
            "userid": "AM51eu",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "4gre424ergfererfrjbfjnd",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2d0aeed9da63eb9c61a8fe",
            "userid": "AM213l",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "4gre4fererfrjbfjnd",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2d0b57ee6718ebb679082c",
            "userid": "AM31I4",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "4gre4fefwefeffererfrjbfjnd",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2d0c4aee6718ebb679082e",
            "userid": "AM218o",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "4gre4fefwefeffererfrjbfjnd",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2d0c561e8891ebda9e4cf8",
            "userid": "AM41V5",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "4gre4fefwefeffererfrjbfjndd",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2e391c1934a96b4834b027",
            "userid": "AM31Lv",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "bdzd@xvs.dgbd",
                "phone_no": "",
                "mobile": "8981669998"
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
                "hobbies": []
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
                "firstName": "xfdvbfvb",
                "middleName": "",
                "lastName": "",
                "DOB": "11/16/2017",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "Male",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "India",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2f451c856e442b898811d2",
            "userid": "AM81F5",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "4gre4fefwefeffererfrjbfjndd",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2f4b4b856e442b898811d4",
            "userid": "AM01Pj",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "4gre4fefwefeffererfrjbfjndd",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2f4b59856e442b898811d6",
            "userid": "AM31Zx",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "4gre4fefwefeffererfrjbfjnddsqsqs",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2f4b65e086352facfe79d4",
            "userid": "AM51Lv",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "4gre4fefwefeffererfrjbfjnddsqsqs",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2f6d32e0dd8c343831dac2",
            "userid": "AM21ec",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "4gre4fefwefeffererfrjbfjnddsqsqs",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2f6d7fe0dd8c343831dac4",
            "userid": "AM21iI",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2f6dedd650c234f3461503",
            "userid": "AM11h7",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2f6e95d0aad0356d110e48",
            "userid": "AM31VH",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2f6eaf608706358757a376",
            "userid": "AM110c",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2f70c62171db36e3541ce4",
            "userid": "AM516W",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2f7458a126ff3939f58e3b",
            "userid": "AM51x5",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2f760d1e19833a4f6d7fba",
            "userid": "AM91fv",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2f76549663173a89b5100a",
            "userid": "AM611g",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2f7706d006dc3af4e2a144",
            "userid": "AM31JD",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2f7d773d00663f09a28c80",
            "userid": "AM31bz",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2f7dca21fa8f3f4c6bcc85",
            "userid": "AM91GO",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2f8263629b084219776b0d",
            "userid": "AM61F9",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2f830ec33629429525c810",
            "userid": "AM51O8",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2f835fc33629429525c812",
            "userid": "AM31FE",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2f9599cd931247611ba227",
            "userid": "AM91e7",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2f95f3889f1a47b43ceb38",
            "userid": "AM31B3",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2fa9d36af66d4bffff0e07",
            "userid": "AM319W",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2facc3c033ef4e3f5d23f8",
            "userid": "AM61mI",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2fada88afc5b4ee1e782fa",
            "userid": "AM71bE",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2fadcef343684efb992e76",
            "userid": "AM410z",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a2ff719d08a2e8c16d6d089",
            "userid": "AM91I3",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a3251e51934a96b4834b029",
            "userid": "AM31Qv",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "test@test.com",
                "phone_no": "",
                "mobile": "8877665544"
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
                "hobbies": []
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
                "firstName": "asf",
                "middleName": "",
                "lastName": "",
                "DOB": "12/14/2017",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "Male",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "India",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a3251e71934a96b4834b02b",
            "userid": "AM01vi",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "test@test.com",
                "phone_no": "",
                "mobile": "8877665544"
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
                "hobbies": []
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
                "firstName": "asf",
                "middleName": "",
                "lastName": "",
                "DOB": "12/14/2017",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "Male",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "India",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a3251e71934a96b4834b02d",
            "userid": "AM918v",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "test@test.com",
                "phone_no": "",
                "mobile": "8877665544"
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
                "hobbies": []
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
                "firstName": "asf",
                "middleName": "",
                "lastName": "",
                "DOB": "12/14/2017",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "Male",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "India",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a32b8ce80b9bc838fad5390",
            "userid": "AM71QG",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a32b9d5076734843efacb3e",
            "userid": "AM819B",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a32bb20076734843efacb40",
            "userid": "AM1148",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "thekrishnarama@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a32bc07076734843efacb42",
            "userid": "AM41F7",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a32bcbf076734843efacb44",
            "userid": "AM31QY",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a32beea076734843efacb46",
            "userid": "AM11M7",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a32bf0603c8a801f2bc1f01",
            "userid": "AM11M1",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a32bf8356b0250266d86c91",
            "userid": "AM8156",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a32bfb4ced48c0283ab6e58",
            "userid": "AM61Tf",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a32bfff9096d502b9e4048c",
            "userid": "AM11wN",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a32c0314884d202e622e013",
            "userid": "AM311j",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a32c0b5366880035c08671f",
            "userid": "AM01Yy",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a32c1b322678503fc971a43",
            "userid": "AM813D",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a32c1e0948d7204305824fd",
            "userid": "AM914w",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a32c231948d7204305824ff",
            "userid": "AM61tP",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a32c55da8342c06d009b853",
            "userid": "AM719o",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a32c6d2c789e907cca0ca93",
            "userid": "AM71lP",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a32c722ba42b208224366b8",
            "userid": "AM61l9",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a32c73cd3f4f108356ca544",
            "userid": "AM61xm",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a32c761d3f4f108356ca546",
            "userid": "AM211J",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a32c7b2ffd7040882bc85ec",
            "userid": "AM61w1",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a32c7da085b8e08b0bde887",
            "userid": "AM014g",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a32c825dff99c08ea36305e",
            "userid": "AM91z0",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a32c87c0b551c092a085ec5",
            "userid": "AM51OO",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a335d0a0b551c092a085ec7",
            "userid": "AM01Qz",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a335e7d0b551c092a085ec9",
            "userid": "AM71gj",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a3360270b551c092a085ecb",
            "userid": "AM71Oz",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a3360945b6b6c21514938db",
            "userid": "AM71Z5",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a3360ec5b6b6c21514938dd",
            "userid": "AM21nw",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "anoop100singh@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a3361405b6b6c21514938df",
            "userid": "AM71Y9",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "thekrishnarama@gmail.com",
                "phone_no": "",
                "mobile": "1234567890"
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
                "hobbies": []
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
                "firstName": "anoop",
                "middleName": "",
                "lastName": "",
                "DOB": "23134324234232",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "1",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "india",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        },
        {
            "_id": "5a46fccefbed8129c018e4e5",
            "userid": "AM91o3",
            "profileImage": "",
            "__v": 0,
            "parnicYoga": {
                "arhaticLevel": "",
                "isTrainer": 0,
                "trainerLevel": "",
                "prosperity": [],
                "spritual": [],
                "healing": []
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
                "email": "b.ashuthosh@gmail.com",
                "phone_no": "",
                "mobile": "9881235584"
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
                "hobbies": []
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
                "firstName": "Ashuthosh Bhat",
                "middleName": "",
                "lastName": "",
                "DOB": "05/01/1976",
                "TOB": "",
                "complex": "",
                "disablity": "",
                "gender": "Male",
                "aboutMe": "",
                "height": "",
                "weight": "",
                "maritialStatus": "",
                "belongsToCountry": "India",
                "belongsToState": "",
                "belongsToCity": "",
                "currentToCountry": "",
                "currentToState": "",
                "currentToCity": "",
                "profileManagedBy": "",
                "religion": "",
                "cast": "",
                "languageknown": []
            },
            "profileStatus": {
                "certificatedUploaded": 0,
                "certificatedApproved": 0,
                "profileInSearch": 0,
                "imagesApproved": 0,
                "loginToken": ""
            }
        }
    ],
    "status": "success",
    "code": 200,
    "displayMsg": "no msg to display",
    "logId": "5896192154194094"
}
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
