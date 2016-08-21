function greet(name) {
    // console.log(`Hello ${name}`)
    console.log(`Hello ${name}`.toUpperCase());
}

greet('Illia Sokol');

function createMail(to, fromd, subject, message) {
    console.log(`
        To: ${to}
        From: ${fromd}
        Subject: ${subject}
        Message: ${message}
    `)
}

let mail = ['to@gmail.com', 'from@gmail.com', 'some subject', 'hello Sokol'];

createMail(...mail);

function add(x, y) {
    console.log(`${x} + ${y} = ${parseInt(x) + +y}`)
}

add(3, 5);

let name = "illia"
console.log(upperName`Again hello ${name}`);
function upperName(literals, value) {
    // console.log(literals,value)
    return literals[0] + value.toUpperCase();
}