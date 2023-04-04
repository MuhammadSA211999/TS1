"use strict";
console.log('BD');
var mapMethod = function (array) {
    var result = array.filter(function (arr) {
        if (arr) {
            return true;
        }
        else {
            return false;
        }
    });
    return result;
};
var array = [0, 3, null, '', [], {}, undefined];
var result = mapMethod(array);
console.log(result);
