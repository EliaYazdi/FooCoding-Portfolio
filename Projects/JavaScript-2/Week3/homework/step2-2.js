'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
    if (i % 3 === 0) {


    }
    if (i % 5 === 0) {

    }
    if (i % 3 === 0 && i % 5 === 0) {


      threeCallback(i);
    }
    if (i % 5 === 0) {
      fiveCallback(i);

    }
  }
  threeCallback(fiveCallback());
  fiveCallback(i);
  threeCallback(i);
}

function sayThree(number) {
  console.log('${number} is divisible by three')

};

function sayFive(number) {

  console.log('${number} is divisible by five');
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;