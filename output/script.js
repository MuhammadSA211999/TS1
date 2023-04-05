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
// const resul = calculate(4, 5, 'multiply')
// console.log(resul);
var userDetails;
userDetails = function (id, userInfo) {
    var result = id + userInfo.age;
    return result;
};
//classws in typescript 
var Player = /** @class */ (function () {
    function Player(n, c, a) {
        this.name = n;
        this.country = c;
        this.age = a;
    }
    //Player function/Method 
    Player.prototype.education = function (school, college, uni) {
        console.log("".concat(school, " from ").concat(college, " is ").concat(uni));
    };
    Player.prototype.playing = function () {
        console.log("".concat(this.name, " from ").concat(this.country, " is ").concat(this.age));
    };
    return Player;
}());
var moenAli = new Player('Moeen Ali', 'Pak-Eng', 36);
var msDhoni = new Player('MS Dhoni', 'India', 40);
msDhoni.age = 60;
// console.log(msDhoni)
// const dhoni = msDhoni.playing()
// const dhoniEduca = msDhoni.education('cannpur hng', 'cannpur govt', 'IIT')
// console.log(dhoniEduca)
//make array of this Player class 
var players = [];
// players.push({}) //failed
players.push(msDhoni);
players.push(moenAli);
console.log(players);
