'use strict';

var _templateObject = _taggedTemplateLiteral(['Again hello ', ''], ['Again hello ', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function greet(name) {
    // console.log(`Hello ${name}`)
    console.log(('Hello ' + name).toUpperCase());
}

greet('Illia Sokol');

function createMail(to, fromd, subject, message) {
    console.log('\n        To: ' + to + '\n        From: ' + fromd + '\n        Subject: ' + subject + '\n        Message: ' + message + '\n    ');
}

var mail = ['to@gmail.com', 'from@gmail.com', 'some subject', 'hello Sokol'];

createMail.apply(undefined, mail);

function add(x, y) {
    console.log(x + ' + ' + y + ' = ' + (parseInt(x) + +y));
}

add(3, 5);

var name = "illia";
console.log(upperName(_templateObject, name));
function upperName(literals, value) {
    // console.log(literals,value)
    return literals[0] + value.toUpperCase();
}