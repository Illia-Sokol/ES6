// function add(x, y) {
//     return x + y;
// }
let add = (x, y) => x + y;
console.log(add(5, 2));


// function square(x) {
//     return x * x;
// }
let square = x => x * x;
console.log(square(3))


// function giveMeAnswer() {
//     return 42;
// }
var giveMeAnswer = () => 42;
console.log(giveMeAnswer());


// function log() {
//     console.log('Logging');
// }
let log = () => console.log('Logging');
console.log(log)


// function multiplay(x, y) {
//     var result = x * y;
//     return result;
// }
let multiplay = (x, y) => {
    var result = x * y;
    return result;
}
console.log(multiplay(4, 4));


// function getPerson() {
//     return {
//         name: 'John'
//     }
// }
let getPerson = () => ({name: 'John Js'});
console.log(getPerson());


// (function () {
//     console.log('IIFE')
// })();
(() => console.log('IIFE-ONE'))();


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
// numbers.forEach(function(num) {
//     sum += num;
// });
numbers.forEach(num => sum += num);
console.log(sum);


// let mapSquare = numbers.map(function(num) {
//     return num * num;
// });
let mapSquare = numbers.map(num => num * num);
console.log(mapSquare);



let person = {
    name: 'Bob',
    greet: function() {
        setTimeout(() => {
            console.log("hello, my name is " + this.name);
            console.log(this);
        }, 2000)
    }
}
person.greet();