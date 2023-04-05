"use strict";
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
// console.log(result);
//array sentex of TS
var arr = [];
arr.push('name', 0);
// console.log(arr)
var a;
a = ['amc', 'nmc'];
console.log(a);
