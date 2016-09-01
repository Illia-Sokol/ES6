'use strict';

class Observe{
  constructor(source) {
    this.source = source.split('');
    this.result = this.source;
  }

  subscribe(next) {
    for (let letter of this.result) {
      next(letter);
    }
  }

  filter(predicate) {
    this.result = this.result.filter(predicate);
    return this;
  }

  map(callback) {
    this.result = this.result.map(callback);
    return this;
  }
}

let some = new Observe('Observable6 Done!')
    .map(letter => letter.toUpperCase())
    .filter(letter => letter === 'O')
    .subscribe(someLetter => console.log(someLetter));
// console.log(some)