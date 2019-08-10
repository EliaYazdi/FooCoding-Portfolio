console.log('Hello World!');
let firstName ='Elia'; //considered more modern to use single quote!
console.log (firstName);
let lastName ='yazdi';
let age = 28;
let fullAge = true;
console.log (fullAge);
let job;
console.log (job);
job = 'teacher'; // we can go ahead and later add(assign) a value to an undefined variable.
console.log (job);

//let 3years; // we cannot start a variable name with a number
// we can start it with _ underscore or $ dollar sign
let $3years;

// let elia/yazdi; // no symbols in the midlle is allowed
// we use camel case to distinguish between the words and know when the new word starts
//let function; we cannot use reserved JS words as well

//type coercion  : javascript changes the type of number into a string in console.log to read it
//alert(firstName + '' + lastName);

//var birthDay = prompt('when is her birthday?');
//console.log (fistName + ' '+ birthDay); 



var year, yearJohn, yearMark;
now = "2018";
ageJohn = 29;
ageMark = 33;
 
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);