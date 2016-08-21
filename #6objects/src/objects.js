let firstName = 'Illia',
    lastName = 'Sokol',
    email = 'siv@gmail.com';

let personES5 = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    greet: function() {
       return console.log('Hello my name is ' + this.firstName + ' ' + this.lastName)
    }
}
Object.defineProperty(personES5, 'fullName', {
    get: function() {
        return this.firstName + ' ' + this.lastName;
    },
    set: function(value) {
        this.firstName = value
    }
})
console.log('personES5', personES5);
console.log(personES5.greet());
console.log(personES5.fullName = 'Falcon');
console.log(personES5.fullName);


let personES6 = {
    firstName,
    lastName,
    email,
    greet() {
        return console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
    },
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    },
    set fullName(value) {
        this.firstName = value;
    }
}
console.log('personES6', personES6);
console.log(personES6.greet())
console.log(personES6.fullName = 'Elijah');
console.log(personES6s.fullName);

// set properties
// personES6.firstName;
// person['firstName'];

let property = 'lastName';
personES6[property]; // person['lastName']

let examplePerson;
examplePerson = {
    [property]: 'Falcon'
}
console.log('examplePerson', examplePerson)

function createCar(property, value) {
    return {
        [property]: value,
        ['_' + property]: value,
        [property.toUpperCase()]: value,
        ['get' + property]() {
            return `Hello ${property}`
        }
    }
}

console.log('createCar', createCar('vin', 1));
// console.log(createCar.getvin())