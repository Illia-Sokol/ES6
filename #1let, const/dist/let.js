'use strict';

// if (true) {
//     let version = 'ES6';
// }

// console.log(version);

var buttons = document.querySelectorAll('button');

// var i;

var _loop = function _loop(i) {
    button = buttons[i];

    button.innerText = i;
    button.onclick = function (e) {
        console.log(i);
    };
};

for (var i = 0; i < buttons.length; i++) {
    var button;

    _loop(i);
}