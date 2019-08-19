'use strict';

const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);

const y = {
  x: 9
};

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

// Add your explanation as a comment here

//the first function just changes the integer but we console.log the x which is 9.
//the second function takes the value 'y' which is an object. It takes the value of x but then it updates the x
//to become 10 and indeed it updated the 'y'to become equal to 10 as well.