'use strict';

class Observe{
  constructor(source) {
    this.source = source;
    this.result = this.source;
  }

  subscribe(next) {
    for (let letter of this.result) {
      next(letter);
    }
  }
}

let some = new Observe('Observable5 Done!').subscribe(someLetter => console.log(someLetter));
// console.log(some)