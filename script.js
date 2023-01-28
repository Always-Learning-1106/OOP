"use strict";
// constructor function
const Person = function (firstName, birthYear) {
  //instance properties
  (this.firstName = firstName), (this.birthYear = birthYear);
};
// Never do this
// (this.calcAge = function () {
//   console.log(2037 - this.birthYear);
// });
// };
const jonas = new Person("Jonas", 1991);
console.log(jonas);

//1. new empty object is created {}
// 2. function is called, this = {} this. equals the new empty object
// 3. {} linked to prototype
// 4. function automatically returns {}

const gwen = new Person("Gwen", 1984);
console.log(gwen);
const jack = new Person("Jack", 1897);
console.log(gwen, jack);

console.log(gwen instanceof Person);
// gwen.calcAge();
