'use strict';

// function add(x, y) {
//     return x + y;
// }
var add = function add(x, y) {
    return x + y;
};
console.log(add(5, 2));

// function square(x) {
//     return x * x;
// }
var square = function square(x) {
    return x * x;
};
console.log(square(3));

// function giveMeAnswer() {
//     return 42;
// }
var giveMeAnswer = function giveMeAnswer() {
    return 42;
};
console.log(giveMeAnswer());

// function log() {
//     console.log('Logging');
// }
var log = function log() {
    return console.log('Logging');
};
console.log(log);

// function multiplay(x, y) {
//     var result = x * y;
//     return result;
// }
var multiplay = function multiplay(x, y) {
    var result = x * y;
    return result;
};
console.log(multiplay(4, 4));

// function getPerson() {
//     return {
//         name: 'John'
//     }
// }
var getPerson = function getPerson() {
    return { name: 'John Js' };
};
console.log(getPerson());

// (function () {
//     console.log('IIFE')
// })();
(function () {
    return console.log('IIFE-ONE');
})();

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;
// numbers.forEach(function(num) {
//     sum += num;
// });
numbers.forEach(function (num) {
    return sum += num;
});
console.log(sum);

// let mapSquare = numbers.map(function(num) {
//     return num * num;
// });
var mapSquare = numbers.map(function (num) {
    return num * num;
});
console.log(mapSquare);

var person = {
    name: 'Bob',
    greet: function greet() {
        var _this = this;

        setTimeout(function () {
            console.log("hello, my name is " + _this.name);
            console.log(_this);
        }, 2000);
    }
};
person.greet();