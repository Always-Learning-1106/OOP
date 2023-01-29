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
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   return (this.speed += 10);
// };
// Car.prototype.brake = function () {
//   return (this.speed -= 5);
// };
// const lambo = new Car("lambo", 40);
// const ferrari = new Car("Ferarri", 100);

// console.log(lambo.speed);
// console.log(lambo.accelerate());
// console.log(lambo.accelerate());
// console.log(lambo.accelerate());
// console.log(lambo.brake());
// console.log(lambo.brake());

// console.log(ferrari.accelerate());
// console.log(ferrari.accelerate());
// console.log(ferrari.brake());
// console.log(ferrari.accelerate());
// console.log(ferrari.accelerate());
// console.log(ferrari.brake());

//class expression
// const PersonCh = class {
//   constructor(lastName, carType, speed) {
//     this.lastName = lastName;
//     this.carType = carType;
//     this.speed = speed;
//   }
//   speedUp() {
//     return (this.speed += 10);
//   }
// };

// const bob = new PersonCh("James", "Ford", 25);
// console.log(bob);
// PersonCh.prototype.accelerate = 25;
// console.log(bob.speedUp());
// console.log(bob.speedUp());
// console.log(bob.speedUp());
// //class declaration
// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     return 2023 - this.birthYear;
//   }
// }
// const jessica = new PersonCl("Jessica", 1999);
// console.log(jessica);

// console.log(jessica.calcAge());

// PersonCl.prototype.greet = function () {
//   return `Hey ${this.firstName}`;
// };
// console.log(jessica.greet());

//1. classes are not hoisted
//2. Classes are first class citizens
//3. the body of class is executed in strict mode
// const nums = [2, 7, 11, 15];
// const target = 9;
// var twoSum = function (nums, target) {
// const arr = nums.map((num, i) => {
//   const answer = [];
//   if (nums[i] + nums[i + 1] === target) {
//     answer.push(nums[num]);
//     answer.push(nums[num + 1]);
//     return answer;
//   } else return -1;
// });
// return arr;
// };

// var twoSum = function (nums, target) {
//   const arr = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (i < nums.length) {
//       if (nums[i] + nums[i + 1] === target) {
//         arr.push(i);
//         arr.push(i + 1);
//       }

//     }
//   }
//   return arr;
// };
const nums = [3, 2, 3];
const target = 6;

var twoSum = function (nums, target) {
  const firstIndex = nums[0];
  const arr = [];
  const reduce = nums.reduce(function (acc, curr, i, arr) {
    return i;
  });
  return reduce;
};
console.log(twoSum(nums, target));
// console.log(nums.indexOf(3));
// console.log(nums.lastIndexOf(3));
