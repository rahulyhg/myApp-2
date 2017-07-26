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
