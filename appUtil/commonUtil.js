"use strict";
var _ = require("lodash");

var utls = new Object();

utls.ipAddress = function(){
    var os = require('os');

    var interfaces = os.networkInterfaces();
    var addresses = [];
    for (var k in interfaces) {
        for (var k2 in interfaces[k]) {
            var address = interfaces[k][k2];
            if (address.family === 'IPv4' && !address.internal) {
                addresses.push(address.address);
            }
        }
    }

    return addresses;
}

utls.uuid = function(size, typen) {

    var maxSize = 32,
        base = 16,
        timeStamp = new Date().getTime().toString(),
        type = typen || "AN", // AN - alfa-numeric, N - numeric
        alfaNumeric = "Pu1avQ2bw3Rcx4dSy5eTz6fUA7gVB8WhC9iXD0jYE1kZF2lG3mH4nI5oJ6pK7qL8rM9sN0tO",
        numeric = "12345678901234567890",
        chunk = (typen == "AN")? alfaNumeric : numeric,
        uid = "",
        bitSize,
        adds = this.ipAddress();

    if (!size || isNaN(size))
        size = base;

    if (size % 2)
        size = size + 1;

    if (size > base)
        size = maxSize;

    bitSize = size || base;

    // 4 or 8 bits picked from date time stamp from seconds
    for (var i = timeStamp.length - 1; i >= (timeStamp.length - (bitSize / 4)); i--) {
        uid += timeStamp[i];
    }

    // 4 or 8 bits from IP-Addess/ IPV6
    if(adds.length){
        var addFormat = adds[0].split('.').join("");
        for (var i = 0; i < (bitSize / 4); i++) {
            uid += addFormat[i];
        }
    }
    else{

        //8 or 16 bits picked from data chunk stamp randomly
        for (var i = 0; i < (bitSize / 4); i++) {
            uid += chunk[Math.floor(Math.random() * chunk.length)];
        }

    }

    //8 or 16 bits picked from data chunk stamp randomly
    for (var i = 0; i < (bitSize / 2); i++) {
        uid += chunk[Math.floor(Math.random() * chunk.length)];
    }

    return uid;
}

module.exports = utls;

// test cases
(function(){
    if(require.main == module){
     console.log(utls.uuid(64, "AN"));
      //console.log(utls.ipAddress());

    }
}());