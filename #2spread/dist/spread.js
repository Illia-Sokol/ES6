'use strict';

var staticLanguages = ['C', 'C++', 'Java'];
var dynamicLanguages = ['JS', 'PHP', 'Ruby'];
var languages = [].concat(staticLanguages, ['C#'], dynamicLanguages, ['Python']);
console.log('languages', languages);

function add(x, y, z) {
    console.log(x + y + z);
}

var numbers = [1, 3, 6];

add.apply(undefined, numbers);