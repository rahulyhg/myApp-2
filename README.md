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
