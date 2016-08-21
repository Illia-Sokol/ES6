'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var languages = ['JS', 'PHP', 'Java', 'Python'];

// let javas = languages[0];
// let php = languages[1];
// let java = languages[2];
// let pyth = languages[3];

// let javas, php, java, pyth;
var javas = languages[0];
var php = languages[1];
var java = languages[2];
var pyth = languages[3];


console.log(javas, php, java, pyth);

var scores = [3, 4, 5];
// let [low, mid, high] = scores;
// console.log(low, mid, high);

// let [low, mid, high, higher] = scores;
// console.log(low, mid, high, higher);

// let [low, , high] = scores;
// console.log(low,high);

// let [low, ...rest] = scores;
// console.log(low, rest);

// let [low, mid, high, higher = 10] = scores;
// console.log(low, mid, high, higher);


// let anotherScores = [3, 4, [5, 6]];
// let [low, mid, high] = anotherScores;
// console.log(low, mid, high);

// let anotherScores = [3, 4, [5, 6]];
// let [low, mid, [high, higher]] = anotherScores;
// console.log(low, mid, high, higher);

// function computScore([low, mid]) {
//     console.log(low, mid);
// }
// computScore([8, 9]);

function getScore() {
    return [3, 5, 8];
}
var result = getScore();
console.log(result);

var _getScore = getScore();

var _getScore2 = _slicedToArray(_getScore, 3);

var low = _getScore2[0];
var mid = _getScore2[1];
var high = _getScore2[2];

console.log(low, mid, high);

var yes = 'Some yes';
var no = 'No';
var _ref = [no, yes];
yes = _ref[0];
no = _ref[1];

console.log('Yes is ', yes);
console.log('No is ', no);
console.log('O_o');