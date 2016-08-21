'use strict';

// function applyForVisa(documents, resolve, reject) {
//     console.log('Обработка заявления...');
//     setTimeout(function() {
//         Math.random() > .5 ? resolve({}) : reject('В визе отказанно: нехвататет документов')
//     }, 2000)
// }

// function bookHotel() {}

// function buyTickets() {}

// applyForVisa({}, function(visa) {
//     console.info('Виза получена');
//     bookHotel(visa, function(reservation){
//         buyTickets(reservation, function() {

//         }, function() {

//         })
//     }, function(error) {

//     })
// },
//     function(error) {
//         console.error(error)
//     }
// );

// in IE6

function applyForVisa(documents) {
    console.log('Обработка заявления...');
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            Math.random() > 0 ? resolve({}) : reject('В визе отказанно: нехватка документов');
        }, 2000);
    });
    return promise;
}

function getVisa(visa) {
    console.info('Виза получена снова');
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            return resolve(visa);
        }, 2000);
    });
}

function bookHotel(visa) {
    console.log(visa);
    console.log('Бронируем отель');
    return Promise.resolve(visa);
};

function buyTickets(booking) {
    console.log('Покупаем билеты');
    console.log('Бронь', booking);
};

applyForVisa({}).then(getVisa).then(bookHotel).then(buyTickets).catch(function (error) {
    return console.error(error);
});