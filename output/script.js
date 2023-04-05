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
// console.log(a);
var d = [];
d.push({}, 'nn', [], null);
// console.log(d);
var e = ['amra'];
e.push('string array te sudu matro string rakha zay');
// console.log(e);
//function signature sentex on TS
var myFunc;
//ekhane myFunc ekta function variable, myFunc function ti duite string paramtre ney ebng kuno kichu return kore na
var add;
add = function (a, b) {
    var d = a * b;
    return d;
};
// const resul = add(10, 6, 6)
// console.log(resul)
var calculate;
calculate = function (a, b, c) {
    if (c === 'add') {
        return a + b;
    }
    else if (c === 'minus') {
        return a - b;
    }
    else if (c === 'multiply') {
        return a * b;
    }
    else {
        return a / b;
    }
};
var resul = calculate(4, 5, 'multiply');
console.log(resul);
