'use strict';

var person = {
    firstName: 'Illia',
    lastName: 'Sokol'
};
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

var user = {
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
};

// let {firstName: first, lastName, social: {facebook: fb}, social: {login: {totwitter}}, age = 25} = user; 
// console.log(first, lastName, fb, totwitter, age);

function post(url, _ref) {
    var _ref$data = _ref.data;
    var firstName = _ref$data.firstName;
    var lastName = _ref$data.lastName;
    var facebook = _ref$data.social.facebook;
    var cache = _ref.cache;

    console.log(url, firstName, lastName, facebook, cache);
}
var result = post('someURL', { data: user, cache: false });

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
    };
}

var _getUserInfo = getUserInfo();

var firstName = _getUserInfo.firstName;
var lastName = _getUserInfo.lastName;
var facebook = _getUserInfo.social.facebook;
var tofacebook = _getUserInfo.social.login.tofacebook;
;
console.log(firstName, lastName, facebook, tofacebook);