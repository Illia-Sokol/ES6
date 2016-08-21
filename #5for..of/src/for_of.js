let browsers = ['Chrome', 'Edge', 'Firefox', 'Safari', 'Opera'];

for( let browser in browsers) {
    console.log(browser)
}

console.log('for..in');

for (let index in browsers) {
    console.log(browsers[index]);
}

console.log('for..of')
for(let browser of browsers) {
    console.log(browser);
}