let a = 22;
console.log (a);
let b = "elia joon";
console.log (b);
let c  = null;
console.log (c);
let d = true;
console.log (d);
console.log ("There are 4 different types of data for each variable: Number, string, null and boolean.")
console.log ("the type of a is: " + typeof a + "");
a = "number";
console.log ("the type of b is: " + typeof b+ "");
b = "string";
console.log ("the type of c is: " + typeof c + "");
c = "object";
console.log ("the type of d is: " + typeof d + "");
d = "boolean";
if (typeof a == typeof b) {
  console.log ("SAME TYPE!")
}
else {
  console.type ("DIFFERENT TYPES!")
}
if (typeof a == typeof c) {
  console.log ("SAME TYPE!")
}
else {
  console.type ("DIFFERENT TYPES!")
}
if (typeof a == typeof d) {
  console.log ("SAME TYPE!")
}
else {
  console.type ("DIFFERENT TYPES!")
}
if (typeof b == typeof c) {
  console.log ("SAME TYPE!")
}
else {
  console.type ("DIFFERENT TYPES!")
}
if (typeof b == typeof d) {
  console.log ("SAME TYPE!")
}
else {
  console.type ("DIFFERENT TYPES!")
}
if (typeof c == typeof d) {
  console.log ("SAME TYPE!")
}
else {
  console.type ("DIFFERENT TYPES!")
}