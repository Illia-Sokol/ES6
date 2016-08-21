let languages = ['JS', 'PHP', 'Java', 'Python'];

// let javas = languages[0];
// let php = languages[1];
// let java = languages[2];
// let pyth = languages[3];

// let javas, php, java, pyth;
let [javas, php, java, pyth] = languages;

console.log(javas, php, java, pyth);

let scores = [3, 4, 5];
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
let result = getScore();
console.log(result);
let [low, mid, high] = getScore();
console.log(low, mid, high);


let yes = 'Some yes';
let no = 'No';
[yes, no] = [no, yes];
console.log('Yes is ', yes);
console.log('No is ', no);
console.log('O_o')