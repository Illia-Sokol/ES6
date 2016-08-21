function greet(hello = "Hey", name = "Sokol") {
    console.log(`${hello} ${name}`)
}

greet('hello', 'Illia');
greet('hello');
greet(undefined, 'Illia');
greet();

function sumES5() {
    console.log(arguments)
    console.log(arguments instanceof Array)
    var sum = 0;
    Array.prototype.forEach.call(arguments, function(value) {
        return sum += value;
    })
    return console.log(sum)
}
sumES5(1, 3, 5, 9);


function sumES6(...value) {
    console.log(value);
    console.log(value instanceof Array)
    let sum = 0;
    value.forEach(function(value) {
        return sum += value;
    })
    return console.log(sum);
}
sumES6(1, 3, 5, 9);

function sumES6andReduce(...value) {
    let sum = value.reduce(function(sum, value) {
        return sum + value;
    });
    console.log('sum', sum)
}
sumES6andReduce(11, 3, 5, 9);