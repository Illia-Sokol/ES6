"use strict";

function greet() {
    var hello = arguments.length <= 0 || arguments[0] === undefined ? "Hey" : arguments[0];
    var name = arguments.length <= 1 || arguments[1] === undefined ? "Sokol" : arguments[1];

    console.log(hello + " " + name);
}

greet('hello', 'Illia');
greet('hello');
greet(undefined, 'Illia');
greet();

function sumES5() {
    console.log(arguments);
    console.log(arguments instanceof Array);
    var sum = 0;
    Array.prototype.forEach.call(arguments, function (value) {
        return sum += value;
    });
    return console.log(sum);
}
sumES5(1, 3, 5, 9);

function sumES6() {
    for (var _len = arguments.length, value = Array(_len), _key = 0; _key < _len; _key++) {
        value[_key] = arguments[_key];
    }

    console.log(value);
    console.log(value instanceof Array);
    var sum = 0;
    value.forEach(function (value) {
        return sum += value;
    });
    return console.log(sum);
}
sumES6(1, 3, 5, 9);

function sumES6andReduce() {
    for (var _len2 = arguments.length, value = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        value[_key2] = arguments[_key2];
    }

    var sum = value.reduce(function (sum, value) {
        return sum + value;
    });
    console.log('sum', sum);
}
sumES6andReduce(11, 3, 5, 9);