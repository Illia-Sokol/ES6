let staticLanguages = ['C', 'C++', 'Java'];
let dynamicLanguages = ['JS', 'PHP', 'Ruby'];
let languages = [...staticLanguages, 'C#',  ...dynamicLanguages, 'Python'];
console.log('languages', languages);

function add (x, y, z) {
    console.log(x + y + z)
}

let numbers = [1, 3, 6];

add(...numbers);