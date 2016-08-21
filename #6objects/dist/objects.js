'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var firstName = 'Illia',
    lastName = 'Sokol',
    email = 'siv@gmail.com';

var personES5 = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    greet: function greet() {
        return console.log('Hello my name is ' + this.firstName + ' ' + this.lastName);
    }
};
Object.defineProperty(personES5, 'fullName', {
    get: function get() {
        return this.firstName + ' ' + this.lastName;
    },
    set: function set(value) {
        this.firstName = value;
    }
});
console.log('personES5', personES5);
console.log(personES5.greet());
console.log(personES5.fullName = 'Falcon');
console.log(personES5.fullName);

var personES6 = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    greet: function greet() {
        return console.log('Hello my name is ' + this.firstName + ' ' + this.lastName);
    },

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    },
    set fullName(value) {
        this.firstName = value;
    }
};
console.log('personES6', personES6);
console.log(personES6.greet());
console.log(personES6.fullName = 'Elijah');
console.log(personES6.fullName);

// set properties
// personES6.firstName;
// person['firstName'];

var property = 'lastName';
personES6[property]; // person['lastName']

var examplePerson = void 0;
examplePerson = _defineProperty({}, property, 'Falcon');
console.log('examplePerson', examplePerson);

function createCar(property, value) {
    var _ref;

    return _ref = {}, _defineProperty(_ref, property, value), _defineProperty(_ref, '_' + property, value), _defineProperty(_ref, property.toUpperCase(), value), _defineProperty(_ref, 'get' + property, function () {
        return 'Hello ' + property;
    }), _ref;
}

console.log('createCar', createCar('vin', 1));
// console.log(createCar.getvin())