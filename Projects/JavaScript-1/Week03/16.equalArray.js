let o1 = {
  foo: "bar"
};
let o2 = {
  foo: "bar"
};
let o3 = o2;


o1.foo = "shoot";
console.log(o1);

o2.foo = "mio";
console.log(o2)

console.log(o3);