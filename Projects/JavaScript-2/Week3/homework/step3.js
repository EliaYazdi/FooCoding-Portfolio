'use strict';

function createBase(base) {

  const addNum = function (num) {
    return base + num;
  };
  return addNum;
}

const addSix = createBase(6);

console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27

// Do not change or remove anything below this line.
module.exports = createBase;