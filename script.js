"use strict";
// constructor function
// const Person = function (firstName, birthYear) {
//   //instance properties
//   (this.firstName = firstName), (this.birthYear = birthYear);
// };
// // Never do this
// // (this.calcAge = function () {
// //   console.log(2037 - this.birthYear);
// // });
// // };
// const jonas = new Person("Jonas", 1991);
// // console.log(jonas);

// //1. new empty object is created {}
// // 2. function is called, this = {} this. equals the new empty object
// // 3. {} linked to prototype
// // 4. function automatically returns {}

// const gwen = new Person("Gwen", 1984);
// // console.log(gwen);
// const jack = new Person("Jack", 1897);
// // console.log(gwen, jack);

// // console.log(gwen instanceof Person);
// // gwen.calcAge();

// //Prototypes
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// // gwen.calcAge();
// // jonas.calcAge();
// // console.log(Person.prototype);
// // console.log(jonas.__proto__);
// Person.prototype.species = "homo sapiens";
// // console.log(gwen, jack);
// const glenn = new Person("Glenn", 1983);
// // console.log(glenn.calcAge());
// glenn.calcAge();
// // this just links glenn to the Person class prototype
// console.log(glenn.__proto__);
// //Object.prototype is top of prototype chain
// console.log(glenn.__proto__.__proto__);
// //This returns null because you can't go higher than the Object.prototype
// console.log(glenn.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);
// const arr = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2]; // same as new Array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);
// console.log(arr);
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());
// console.log(arr.__proto__);

// console.dir((x) => x + 1);
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  return (this.speed += 10);
};
Car.prototype.brake = function () {
  return (this.speed -= 5);
};
const lambo = new Car("lambo", 40);
const ferrari = new Car("Ferarri", 100);

console.log(lambo.speed);
console.log(lambo.accelerate());
console.log(lambo.accelerate());
console.log(lambo.accelerate());
console.log(lambo.brake());
console.log(lambo.brake());

console.log(ferrari.accelerate());
console.log(ferrari.accelerate());
console.log(ferrari.brake());
console.log(ferrari.accelerate());
console.log(ferrari.accelerate());
console.log(ferrari.brake());
