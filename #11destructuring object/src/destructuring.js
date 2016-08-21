let person = {
    firstName: 'Illia',
    lastName: 'Sokol'
}
// let firstName = person.firstName;
// let lastName = person.lastName;

// let {firstName, lastName} = person;
// console.log(firstName, lastName);

// let {firstName: first, lastName: last} = {firstName: 'illia', lastName: 'falcon'};
// console.log(first, last)

// let {firstName: first, lastName: last, age = 25} = {firstName: 'illia', lastName: 'falcon'};
// console.log(first, last, age)

// let {['first' + 'Name']: first, lastName: last} = {firstName: 'Illia', lastName: 'Falcon'};
// console.log(first, last)

let user = {
    firstName: 'Illia',
    lastName: 'Sokol', 
    social: {
        facebook: 'flFacebookFB', 
        twitter: 'flTwitter',
        login: {
            tofacebook: '123',
            totwitter: '23567'
        }
    }
}

// let {firstName: first, lastName, social: {facebook: fb}, social: {login: {totwitter}}, age = 25} = user; 
// console.log(first, lastName, fb, totwitter, age);

function post(url, {data: {firstName, lastName, social:{facebook}}, cache}) {
    console.log(url, firstName, lastName, facebook, cache)
}
let result = post('someURL', {data: user, cache: false})

function getUserInfo() {
    return {
        firstName: 'Illia',
        lastName: 'Sokol', 
        social: {
            facebook: 'flFacebookFB', 
            twitter: 'flTwitter',
            login: {
                tofacebook: '123',
                totwitter: '23567'
            }
        }
    }
}
let{ firstName, lastName, social: {facebook}, social: {login: {tofacebook} } } = getUserInfo();;
console.log(firstName, lastName,  facebook, tofacebook)