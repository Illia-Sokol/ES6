'use strict';

function observe(observable, next, done) {
  for (let letter of observable) {
    next(letter);
  }
  done();
}

observe('Observable4', (someLetter) => console.log(someLetter), () => console.log('Done!'))
