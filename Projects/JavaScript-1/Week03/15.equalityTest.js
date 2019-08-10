let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

console.log(x == y); //false
console.log(x === y); //false
console.log(z == y); //true
console.log(z === y); //true
console.log(x == z); //false
console.log(x === z); //false